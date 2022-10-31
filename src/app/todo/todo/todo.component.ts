import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeleteTask, Itask, Todo, TodoRes } from 'src/app/Model/tasks';
import { TodoapiService } from 'src/app/services/todoapi.service';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todform!: FormGroup;
  tasks: Todo[] = [];
  inprogress: Todo[] = [];
  done: Todo[] = [];
  edittodo!: Todo;
  isEditEnabled: boolean = false;
  currentTaskid!: string;
  editId!: string;
  index: any;
  taskdelete!: DeleteTask;
  data: any;
  delId: any;

  constructor(public fb: FormBuilder, public ser: TodoapiService) {}

  ngOnInit(): void {
    this.todform = this.fb.group({
      todo: ['', Validators.required],
      completed: [],
      userId: [],
      id: [],
    });
    this.displayAllTodo();
  }
  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  displayAllTodo() {
    this.ser.viewTodo().subscribe((res: any) => {
      console.log(res);
      this.tasks = res.todos;
    });
  }

  addtaskTotodo() {
    const taskInputText = this.todform.value;
    this.ser.addToTodo(taskInputText).subscribe((res: any) => {
      this.tasks.push(res);
    });
    this.todform.reset();
  }

  editTodo(id: any, data: any) {
    this.ser.updaateTodo(id, data).subscribe((res: any) => {
      console.log(res);
      this.edittodo = res;
      this.editId = this.edittodo.id;

      this.isEditEnabled = true;
      this.todform.controls['todo'].setValue(this.edittodo.todo);
      this.todform.controls['userId'].setValue(this.edittodo.userId);
      this.todform.controls['id'].setValue(this.edittodo.id);
      this.todform.controls['completed'].setValue(this.edittodo.completed);
    });
  }
  updateTask(index: any) {
    this.index = this.tasks.findIndex((obj) => obj.id == this.editId);

    this.tasks[index] = this.todform.value;
    console.log(this.index);

    this.isEditEnabled = false;
  }

  deleteTask(delId: any) {
    this.ser.taskDelete(delId).subscribe((res) => {
      console.log(res);
      //  this.index = this.tasks.findIndex((obj) => obj.id == delId);
      this.tasks.splice(this.index, 1);
        this.inprogress.splice(this.index, 1);
    });
  }
}

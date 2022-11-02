import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoapiService {
  private url: string = environment.baseUrl;
  constructor(public h: HttpClient) {}

  viewTodo() {
    return this.h.get(`${this.url}/todos`);
  }

  addToTodo(addtask:any) {
    console.log(addtask);
    
    

    return this.h.post(`${this.url}/todos/add`,addtask);
  }

  updaateTodo(todoId:string,data:any){
    return this.h.put(`${this.url}/todos/${todoId}`, data);
  }

  taskDelete(deleteid:any){
      return this.h.delete(`${this.url}/todos/${deleteid}`);
  }
}

export interface Itask {
  description: string;
  done: boolean;
}

export interface Todo {
  completed: boolean;
  id: string;
  todo: string;
  userId: number;
}

export interface TodoRes {
  todos: Todo[];
  limit: number;
  skip: number;
  total: number;
}

export interface EditTodo {
  id: string;
  todo: string;
  userId: number;
  completed: boolean;
}

export interface DeleteTask {
  // id: number;
  // todo: string;
  // completed: boolean;
  // userId: number;
  // isDeleted: boolean;
  // deletedOn: string;

  completed:boolean
  deletedOn:string
  id:number
  isDeleted:boolean
  userId:number
  todo:string 
  
}

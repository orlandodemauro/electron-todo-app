import {Injectable} from '@angular/core';
import {ElectronService} from '../providers/electron.service';

import {Todo} from './todo';

@Injectable()
export class TodoService {

  private apiUrl = '/api';  // URL to web api

  constructor(private electron: ElectronService) {
  }

  addTodo(todo: Todo): Promise<Todo> {
    return this.electron.send("postTodo", todo)
               .then(response => response as Todo)
               .catch(this.handleError);
  }

  deleteTodoById(_id: number): Promise<Object> {
    return this.electron.send("deleteTodo", _id)
               .then(response => response as Todo)
               .catch(this.handleError);
  }

  updateTodoById(_id: number, payload: Object = {}): Promise<Todo> {
    return this.electron.send("updateTodo", { _id, payload })
               .then(response => { response as Todo })
               .catch(this.handleError);
  }

  getAllTodos(): Promise<Todo[]> {
    return this.electron.send("getTodos", {})
               .then(response => response as Todo[])
               .catch(this.handleError);
  }

  getTodoById(_id: number): Promise<Todo> {
    return this.electron.send("getTodos", { _id })
               .then(response => response as Todo)
               .catch(this.handleError);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo): Promise<Todo>{
    return this.updateTodoById(todo._id, {
      complete: !todo.complete
    });
  }

  deleteCompleted(): Promise<Object> {
    return this.electron.send("clear-completed", {})
           .then(response => response as Todo[])
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

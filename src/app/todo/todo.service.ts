import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Todo} from './todo';

import { UtilsService } from '../shared/utils.service';

@Injectable()
export class TodoService {

  constructor(private http: Http, private utilsService: UtilsService) {
  }

  private apiUrl = this.utilsService.get_api_url('api');  // URL to web api

  addTodo(todo: Todo): Promise<Todo> {
    return this.http.post(
                 `${this.apiUrl}/todos`,
                 todo
               )
               .toPromise()
               .then(response => response.json() as Todo)
               .catch(this.handleError);
  }

  deleteTodoById(_id: number): Promise<Object> {
    return this.http.delete(`${this.apiUrl}/todos/${_id}`)
               .toPromise()
               .then(response => response.json() as Todo)
               .catch(this.handleError);
  }

  updateTodoById(_id: number, values: Object = {}): Promise<Todo> {
    return this.http.put(
                  `${this.apiUrl}/todos/${_id}`,
                  {todo: values}
               )
               .toPromise()
               .then(response => response.json() as Object)
               .catch(this.handleError);
  }

  getAllTodos(): Promise<Todo[]> {
    return this.http.get(`${this.apiUrl}/todos`)
               .toPromise()
               .then(response => {
                  return response.json() as Todo[];
               })
               .catch(this.handleError);
  }

  getTodoById(_id: number): Promise<Todo> {
    return this.http.get(`${this.apiUrl}/todos/${_id}`)
               .toPromise()
               .then(response => response.json() as Todo)
               .catch(this.handleError);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo): Promise<Todo>{
    return this.updateTodoById(todo._id, {
      complete: !todo.complete
    });
  }

  deleteCompleted(): Promise<Object> {
    return this.http.delete(`${this.apiUrl}/todos/clear-completed`)
           .toPromise()
           .then(response => response.json() as Todo)
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
import {Injectable} from '@angular/core';
import {ElectronService} from '../providers/electron.service';
import {Todo} from './todo';
import { UtilsService } from '../shared/utils.service'

@Injectable()
export class TodoService {

  private apiUrl;
  private messages;

  constructor(private electron: ElectronService, private utils: UtilsService) {
    this.messages = this.utils.get_messages();
    this.apiUrl = this.utils.get_api_url();
  }

  addTodo(todo: Todo): Promise<Todo> {
    return this.electron.send(this.messages.ADD_TODO, todo)
               .then(response => response as Todo)
               .catch(this.handleError);
  }

  deleteTodoById(_id: number): Promise<Object> {
    return this.electron.send(this.messages.DELETE_TODO, _id)
               .then(response => response as Todo)
               .catch(this.handleError);
  }

  updateTodoById(_id: number, payload: Object = {}): Promise<Todo> {
    return this.electron.send(this.messages.UPDATE_TODO, { _id, payload })
               .then(response => { response as Todo })
               .catch(this.handleError);
  }

  getAllTodos(): Promise<Todo[]> {
    return this.electron.send(this.messages.GET_TODOS, {})
               .then(response => response as Todo[])
               .catch(this.handleError);
  }

  getTodoById(_id: number): Promise<Todo> {
    return this.electron.send(this.messages.GET_TODOS, { _id })
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
    return this.electron.send(this.messages.CLEAR_COMPLETED, {})
           .then(response => response as Todo[])
           .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

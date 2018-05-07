import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[] = [];

  @Input()
  activeTasks: number = 0;

  @Input()
  path: string = 'all';

  @Output()
  clear: EventEmitter<Todo> = new EventEmitter();

  @Output()
  blocking: EventEmitter<Todo> = new EventEmitter();

  @Output()
  noBlocking: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  clearCompleted() {
    this.clear.emit();
  }

  blockingAction() {
    this.blocking.emit();
  }

  noBlockingAction() {
    this.noBlocking.emit();
  }

}

import todoController from "../controllers/todo";
import ipcPromise from 'ipc-promise';
import { messages } from '../../shared/constants'

ipcPromise.on(messages.ADD_TODO, todo => {
  return todoController.addTodo(todo);
});

ipcPromise.on(messages.GET_TODOS, (payload) => {
  return todoController.getTodos(payload);
});

ipcPromise.on(messages.DELETE_TODO, (_id) => {
  return todoController.deleteTodo({ _id });
});

ipcPromise.on(messages.UPDATE_TODO, (obj) => {
  return todoController.updateTodo(obj._id, obj.payload);
});

ipcPromise.on(messages.CLEAR_COMPLETED, () => {
  return todoController.deleteTodo({ complete: true });
});
 
require("./db");
import todoController from "./controllers/todo";
import ipcPromise from 'ipc-promise';

ipcPromise.on('postTodo', todo => {
  return todoController.addTodo(todo);
});

ipcPromise.on('getTodos', (payload) => {
  return todoController.getTodos(payload);
});

ipcPromise.on('deleteTodo', (_id) => {
  return todoController.deleteTodo({ _id });
});

ipcPromise.on('updateTodo', (obj) => {
  return todoController.updateTodo(obj._id, obj.payload);
});

ipcPromise.on('clear-completed', () => {
  return todoController.deleteTodo({ complete: true });
});
 
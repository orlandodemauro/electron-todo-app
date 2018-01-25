import Todo from '../models/todo';
import Promise from 'bluebird';

Promise.promisifyAll(Todo); 


exports.addTodo = todo => {
    return Todo.saveAsync(todo);
}

exports.getTodos = payload => {
    return Todo.findAsync(payload);
}

exports.deleteTodo = payload => {
    return Todo.removeAsync(payload,  { multi: true });
}

exports.updateTodo = (_id, payload) => {
    return Todo.findAsync({ _id }).then(result => {
        if (!result) return new Promise.reject("elment not found");
        return Todo.updateAsync({ _id },  { $set: payload } );
    })
}
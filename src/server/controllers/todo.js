import TodoService from '../service/todo';
import utils from '../service/utils';

// Endpoint POST /todos
exports.addTodo = (req, res) => {
    TodoService.addTodo(req.body)
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todo not added' }, 400);
      });
};

// Endpoint GET /todos
exports.getTodos = (req, res) => {
    TodoService.getTodos()
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todo not found' }, 400);
      });
};

// Endpoint GET /todos/_id
exports.getTodo = (req, res) => {
    const _id = req.params._id;
    if(!_id)
        utils.error(res,  {message: 'missing _id'}, 400);

    TodoService.getTodos({ _id })
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todo not found' }, 400);
      });
};

// Endpoint DELETE /todos/_id
exports.deleteTodo = (req, res) => {
    const _id = req.params._id;
    if(!_id)
        utils.error(res,  {message: 'missing _id'}, 400);

    TodoService.deleteTodo({ _id })
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todo not deleted' }, 400);
      });
};

// Endpoint DELETE /todos/clear-completed
exports.clearCompleted = (req, res) => {
    TodoService.deleteTodo({ complete: true })
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todos not deleted' }, 400);
      });
};

// Endpoint PUT /todos/_id
exports.updateTodo = (req, res) => {
    const _id = req.params._id;
    if(!_id)
        utils.error(res,  {message: 'missing _id'}, 400);

    TodoService.updateTodo(_id, req.body.todo)
      .then(todo => {
        utils.success(res, todo);
      })
      .catch(err => {
        utils.error(res, {message: 'todo not updated' }, 400);
      });
};

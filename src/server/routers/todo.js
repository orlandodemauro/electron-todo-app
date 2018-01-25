import todoController from '../controllers/todo';
const router = require('express').Router();

router.route('/')
  .post(todoController.addTodo)
  .get(todoController.getTodos);

router.route('/clear-completed')
  .delete(todoController.clearCompleted);

  router.route('/:_id')
  .get(todoController.getTodo)
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);
 
module.exports = router;
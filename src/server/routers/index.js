import todoController from '../controllers/todo';

const router = require('express').Router();

router.use('/todos', require('./todo'));

router.use('/blocking', todoController.blocking);

router.use('/no-blocking', todoController.noBlocking);

module.exports = router;


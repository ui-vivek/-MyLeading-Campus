const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Create a new Todo
router.post('/', todoController.createTodo);

// Update an existing Todo
router.put('/:todoId', todoController.updateTodo);

// Get all Todos
router.get('/', todoController.getAllTodos);

// Get a Todo by Id
router.get('/:todoId', todoController.getTodoById);

// Delete a Todo by Id
router.delete('/:todoId', todoController.deleteTodo);

module.exports = router;

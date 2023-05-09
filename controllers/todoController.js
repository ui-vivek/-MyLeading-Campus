const Todo = require('../models/todo');

// Create a new Todo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Update an existing Todo
const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const [rowsUpdated, [updatedTodo]] = await Todo.update(req.body, {
      where: { id: todoId },
      returning: true
    });
    if (rowsUpdated !== 1) {
      res.status(404).send('Todo not found');
    } else {
      res.json(updatedTodo);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Get all Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Get a Todo by Id
const getTodoById = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findByPk(todoId);
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      res.json(todo);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Delete a Todo by Id
const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const rowsDeleted = await Todo.destroy({
      where: { id: todoId }
    });
    if (rowsDeleted !== 1) {
      res.status(404).send('Todo not found');
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createTodo,
  updateTodo,
  getAllTodos,
  getTodoById,
  deleteTodo
};

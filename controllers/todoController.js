const Todo = require("../models/Todo");

// @desc    Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

// @desc    Create new todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const todo = await Todo.create({ title, description });
  res.status(201).json(todo);
};

// @desc    Update todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Todo not found" });
  res.json(updated);
};

// @desc    Delete todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deleted = await Todo.findByIdAndDelete(id);
  if (!deleted) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo deleted successfully" });
};

// @desc    Mark as complete
exports.markComplete = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todo.completed = true;
  await todo.save();
  res.json(todo);
};

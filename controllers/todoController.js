const Todo = require("../models/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getTodosByCompleted = async (req, res) => {
  try {
    const { completed } = req.query;
    let filter = {};
  
    if (completed === 'true') {
      filter.completed = true;
    } else if (completed === 'false') {
      filter.completed = false;
    }
  
    const todos = await Todo.find(filter);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
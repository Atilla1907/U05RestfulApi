const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  dueDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);
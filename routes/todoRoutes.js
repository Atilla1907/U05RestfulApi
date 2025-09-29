const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getAllTodos);
router.get("/filter", todoController.getTodosByCompleted);
router.get("/:id", todoController.getTodo);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
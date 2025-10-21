const express = require("express");

const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markComplete,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/complete", markComplete);

module.exports = router;

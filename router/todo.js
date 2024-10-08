import express from "express";
const router = express.Router();

let todos = [
  {
    id: 1,
    title: "Sample Todo",
    completed: false
  }
];

// Get all todos
router.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post("/todos", (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false
  };
  todos.push(newTodo);
  res.json(newTodo);
});

// Mark a todo as completed
router.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todo = todos.find(todo => todo.id == todoId);

  if (todo) {
    todo.completed = !todo.completed; // Toggle completion status
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Delete a todo
router.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex(todo => todo.id == todoId);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

export default router;

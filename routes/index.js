var express = require("express");
var router = express.Router();

todoList = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My todos" });
});

router.post("/todo", function (req, res, next) {
  const { name, todo } = req.body;
  const existingUser = todoList.find((user) => user.name === name);
  if (existingUser) {
    existingUser.todos.push(todo);
    res.send("Todo added");
  } else {
    const newUser = { name, todos: [todo] };
    todoList.push(newUser);
    res.send("User added");
  }
});

router.get("/user/:id", function (req, res, next) {
  const { id } = req.params;
  const existingUser = todoList.find(
    (user) => user.name.toLowerCase() === id.toLowerCase()
  );
  if (existingUser) {
    res.send(existingUser.todos);
  } else {
    const resText = { text: ["User not found"] };
    res.send(resText.text);
  }
});

router.delete("/user/:id", function (req, res, next) {
  const { id } = req.params;
  const existingUser = todoList.find((user) => user.name === id);
  if (existingUser) {
    todoList = todoList.filter((person) => person.name !== id);
    res.send("User deleted");
  } else {
    res.send("User not found");
  }
});

module.exports = router;

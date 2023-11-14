var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/user/:id", function (req, res, next) {
  const { id } = req.params;
  const existingUser = todoList.find((user) => user.name === id);
  if (existingUser) {
    res.send(existingUser.todos);
  } else {
    const resText = { text: ["User not found"] };
    res.send(resText.text);
  }
});

module.exports = router;

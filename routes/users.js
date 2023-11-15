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
    res.json(existingUser);
  } else {
    const resText = { text: ["User not found"] };
    res.json(resText);
  }
});

module.exports = router;

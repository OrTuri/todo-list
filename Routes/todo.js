const express = require("express");
const router = express.Router();
const {
  postTodo,
  updateDone,
  getTodoList,
  deleteTask,
} = require("../Controllers/todo");

router.post("/upload", postTodo);

router.put("/update", updateDone);

router.get("/getall", getTodoList);

router.delete("/delete", deleteTask);

module.exports = {
  router,
};

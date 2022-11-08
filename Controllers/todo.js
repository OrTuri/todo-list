const {
  insertToDB,
  updateRecord,
  getDataFromDB,
  deleteFromDB,
} = require("../Database/dbModules");

const postTodo = (req, res) => {
  const { todo: todo_task, done, id } = req.body;
  insertToDB({ todo_task, done }, "todo_list", "todo_id").then(
    ([{ todo_id }]) => {
      res.send(String(todo_id));
    }
  );
};

const updateDone = (req, res) => {
  const { id, done } = req.body;
  console.log(id, done);
  updateRecord("todo_list", { done }, { todo_id: id });
  res.status(200);
};

const getTodoList = (req, res) => {
  getDataFromDB("todo_list").then((data) => res.json(data));
};

const deleteTask = (req, res) => {
  deleteFromDB("todo_list", { todo_id: req.body }).then((res) =>
    console.log(res)
  );
};

module.exports = {
  postTodo,
  updateDone,
  getTodoList,
  deleteTask,
};

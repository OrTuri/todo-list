const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { router: todoRouter } = require("./Routes/todo");
const path = require("path");

app.listen(process.env.PORT, () => {
  console.log(`The server is now running on port ${process.env.PORT}`);
});

app.use(cors());
app.use(express.text());
app.use(express.json());
app.use("/todo", todoRouter);

app.use("/", express.static(path.resolve(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

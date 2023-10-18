import express from "express";
import { taskController } from "/tasks/task.controller";

const app = express();

app.set("view engine", "ejs");

app.get("/", taskController.list);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

import express from "express";
import { taskController } from "./controller/task.controller.js";

const app = express();

app.set("view engine", "ejs");

app.get("/", taskController.list);
app.get("/create", taskController.createPage);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

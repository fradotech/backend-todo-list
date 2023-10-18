import bodyParser from "body-parser";
import express from "express";
import { taskController } from "./controller/task.controller.js";

const app = express();

app.use(bodyParser());
app.set("view engine", "ejs");

// Routing EJS
app.get("/", taskController.list);
app.get("/create", taskController.createPage);

// Routing API
app.post("/create", taskController.create);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

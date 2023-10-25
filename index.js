import bodyParser from "body-parser";
import express from "express";
import { authController } from "./controllers/auth.controller.js";
import { indexController } from "./controllers/index.controller.js";
import { taskController } from "./controllers/task.controller.js";
import { createConnection } from "./database/database.connection.js";

const app = express();

app.use(bodyParser());
app.set("view engine", "ejs");

createConnection();

// Routing EJS
app.get("/", indexController.index);
app.get("/login", authController.loginPage);
app.post("/login", authController.login);

// Routing TASK
// Routing EJS
app.get("/tasks", taskController.list);
app.get("/tasks/create", taskController.createPage);
app.get("/tasks/update/:id", taskController.updatePage);

// Routing API
app.post("/tasks/create", taskController.create);
app.post("/tasks/update", taskController.update);
app.post("/tasks/delete", taskController.delete);

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});

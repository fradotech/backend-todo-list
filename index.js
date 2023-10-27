import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import cron from "node-cron";
import { authController } from "./controllers/auth.controller.js";
import { indexController } from "./controllers/index.controller.js";
import { taskController } from "./controllers/task.controller.js";
import { userController } from "./controllers/user.controller.js";
import { createConnection } from "./database/database.connection.js";
import { taskScheduler } from "./scheduler/task.scheduler.js";

const app = express();

app.use(session({ secret: "todo_list" }));
app.use(bodyParser());
app.set("view engine", "ejs");

createConnection();

// Routing EJS
app.get("/", indexController.index);
app.get("/login", authController.loginPage);
app.post("/login", authController.login);
app.get("/logout", authController.logout);

// Authorization
// app.use(authMiddleware);

// Routing USER EJS
app.get("/users", userController.list);
app.get("/users/create", userController.createPage);
app.get("/users/update/:id", userController.updatePage);

// Routing API USER
app.post("/users/create", userController.create);
app.post("/users/update", userController.update);
app.post("/users/delete", userController.delete);

// Routing TASK EJS
app.get("/tasks", taskController.list);
app.get("/tasks/create", taskController.createPage);
app.get("/tasks/update/:id", taskController.updatePage);

// Routing API TASK
app.post("/tasks/create", taskController.create);
app.post("/tasks/update", taskController.update);
app.post("/tasks/delete", taskController.delete);

cron.schedule("* * * * *", taskScheduler.reminderDeadline);

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});

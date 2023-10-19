import Task from "../models/task.js";
import { sequelize } from "./database.config.js";

export const createConnection = () =>
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });

// Models
Task;

sequelize
  .sync()
  .then(() => {
    console.log("Table sync successfully!");
  })
  .catch((error) => {
    console.error("Unable to sync table : ", error);
  });

import Sequelize from "sequelize";

export const sequelize = new Sequelize("todo_list", "root", "frado201", {
  host: "localhost",
  dialect: "mysql",
});

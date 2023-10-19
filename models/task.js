import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.config.js";

export const Task = sequelize.define("tasks", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATEONLY,
  },
});

export default Task;

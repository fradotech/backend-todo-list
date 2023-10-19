import Task from "../models/task.js";
import { validateRequired } from "../utils/validators.js";

export const taskController = {
  list: (req, res) => {
    Task.findAll().then((tasks) => {
      res.render("pages/index", { tasks });
    });
  },

  createPage: (req, res) => {
    res.render("pages/task-create");
  },

  create: (req, res) => {
    const isValidName = validateRequired(req, "name");
    const isValidStatus = validateRequired(req, "status");

    if (isValidName || isValidStatus) {
      return res.status(400).send({
        message: `${isValidName || isValidStatus} tidak boleh kosong`,
      });
    }

    Task.create({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      deadline: req.body.deadline,
    }).then((tasks) => {
      res.redirect("/");
    });
  },

  updateStatusDone: null,
  delete: null,
};

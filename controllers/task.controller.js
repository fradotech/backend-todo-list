import Task from "../models/task.js";
import { ejsFormatDatetime } from "../utils/ejsFormatDatetime.js";
import { validateRequired } from "../utils/validators.js";

export const taskController = {
  list: async (req, res) => {
    if (req.query.status == "All") {
      req.query.status = null;
    }

    console.log({ user: req.session.user });

    const tasks = await Task.findAll({
      where: req.query.status && {
        status: req.query.status,
      },
    });

    res.render("pages/task-list", { tasks, query: req.query });
  },

  createPage: (req, res) => {
    res.render("pages/task-form", { title: "Create Task" });
  },

  create: async (req, res) => {
    const isValidName = validateRequired(req, "name");
    const isValidStatus = validateRequired(req, "status");

    if (isValidName || isValidStatus) {
      return res.status(400).send({
        message: `${isValidName || isValidStatus} tidak boleh kosong`,
      });
    }

    await Task.create({
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      deadline: req.body.deadline || null,
    });

    res.redirect("/tasks");
  },

  updatePage: async (req, res) => {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (task.dataValues.deadline) {
      task.dataValues.deadline = ejsFormatDatetime(task.dataValues.deadline);
    }

    res.render("pages/task-form", { title: "Update Task", task });
  },

  update: async (req, res) => {
    const isValidName = validateRequired(req, "name");
    const isValidStatus = validateRequired(req, "status");

    if (isValidName || isValidStatus) {
      return res.status(400).send({
        message: `${isValidName || isValidStatus} tidak boleh kosong`,
      });
    }

    Task.update(
      {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        deadline: req.body.deadline || null,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.redirect("/tasks");
  },

  delete: async (req, res) => {
    await Task.destroy({
      where: {
        id: req.body.id,
      },
    });

    res.redirect("/tasks");
  },
};

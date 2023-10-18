const tasks = [
  {
    name: "Belajar NodeJs",
    description: "bla blabla",
    status: "Doing",
  },
  {
    name: "Belajar React",
    description: "bla blabla",
    status: "Done",
  },
  {
    name: "Belajar Bootsrap",
    description: "bla blabla",
    status: "Todo",
  },
];

export const taskController = {
  list: (req, res) => {
    res.render("pages/index", { tasks });
  },

  createPage: (req, res) => {
    res.render("pages/task-create");
  },

  updateStatusDone: null,
};

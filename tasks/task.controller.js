export const taskController = {
  list: (req, res) => {
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

    res.render("pages/index", { tasks });
  },

  create: null,
  statusDone: null,
};

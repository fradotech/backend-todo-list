import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

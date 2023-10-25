import bcrypt from "bcrypt";
import User from "../models/user.js";

export const authController = {
  loginPage: async (req, res) => {
    res.render("pages/login", { isError: false });
  },

  login: async (req, res) => {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      return res.render("pages/login", {
        isError: true,
        error: "Email atau password salah",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.render("pages/login", {
        isError: true,
        error: "Email atau password salah",
      });
    }

    req.session.user = user;

    return res.redirect("/tasks");
  },

  logout: async (req, res) => {
    req.session.destroy();

    return res.redirect("/");
  },
};

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

    return res.render("pages/login");
  },
};

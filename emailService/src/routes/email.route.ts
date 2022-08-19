import { Router } from "express";
const nodemailer = require("nodemailer");
const handlebars = require("nodemailer-express-handlebars");
const emailRoutes = Router();
const path = require("path");

emailRoutes.post("/", async (request, response) => {
  const { email, name } = request.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.API_EMAIL,
      pass: process.env.API_EMAIL_PASSWORD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve("./views/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views/"),
  };

  transporter.use("compile", handlebars(handlebarOptions));

  const mailOptions = {
    from: process.env.API_EMAIL,
    to: email,
    subject: `Cadastro realizado com sucesso!`,
    template: "email",
    context: {
      name,
    },
  };

  transporter.sendMail(mailOptions);

  return response.send(200);
});

export { emailRoutes };

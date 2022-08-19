import { Router } from "express";
const axios = require("axios");

const userRoutes = Router();

userRoutes.post("/", async (request, response) => {
  const { email, name } = request.body;

  const resp = await axios.post("http://localhost:5555/email", { email, name });

  return response.send(200);
});

export { userRoutes };

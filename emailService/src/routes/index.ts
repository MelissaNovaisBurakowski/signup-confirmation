import { Router } from "express";
import { emailRoutes } from "./email.route";

const router = Router();

router.use("/email", emailRoutes);

export { router };

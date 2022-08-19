import "dotenv/config";
import express, { Request, Response } from "express";
import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.listen(5555, () => console.log("Server is runing"));

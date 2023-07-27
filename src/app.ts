import express, { Router, Request, Response } from "express";

const app = express();
const route = Router();
app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});

app.use(route);

export default app;

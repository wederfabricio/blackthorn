import express, { Router, Response } from "express";
import cartRouter from "@/router/cart";

const app = express();
const indexRouter = Router();
app.use(express.json());

indexRouter.get("/", (_, res: Response) => {
  res.json({ message: "API is running!" });
});

app.use(indexRouter);
app.use(cartRouter);

export default app;

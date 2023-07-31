import express, { Router, Response } from "express";
import cartRouter from "@/routers/cart";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blackthorn Shopping Cart API",
      version: "1.0.0",
      description: "Documentation for API",
    },
  },
  apis: ["./src/routers/*.ts"],
  servers: [
    {
      url: "http://localhost:8000",
      description: "Development server",
    },
  ],
};

const indexRouter = Router();
const openapiSpecification = swaggerJsdoc(options);

indexRouter.get("/", (_, res: Response) => {
  res.json({ message: "API is running!" });
});

app.use(express.json());
app.use(indexRouter);
app.use(cartRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

export default app;

import dotenv from "dotenv";

export const env = dotenv.config({
  path: process.env.ENVIRONMENT === "testing" ? "./.env.testing" : "./.env",
});

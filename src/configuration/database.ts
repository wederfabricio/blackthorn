import dotenv from "dotenv";

const env = dotenv.config({
  path: process.env.ENVIRONMENT === "testing" ? "./.env.testing" : "./.env",
});

const mongoUsername = env.parsed?.MONGO_INITDB_ROOT_USERNAME;
const mongoPassword = env.parsed?.MONGO_INITDB_ROOT_PASSWORD;
const mongoHost = env.parsed?.MONGO_HOST;
const mongoPort = env.parsed?.MONGO_PORT;

export const mongooseUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/`;

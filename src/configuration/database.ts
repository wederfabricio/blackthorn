import { env } from ".";

const mongoUsername = env.parsed?.MONGO_INITDB_ROOT_USERNAME;
const mongoPassword = env.parsed?.MONGO_INITDB_ROOT_PASSWORD;
const mongoHost = env.parsed?.MONGO_HOST;
const mongoPort = env.parsed?.MONGO_PORT;

export const mongooseUri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/`;

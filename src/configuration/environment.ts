import { env } from ".";

export const isProduction = env.parsed?.ENVIRONMENT === "production";

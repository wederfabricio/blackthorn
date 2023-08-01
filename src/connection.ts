import { mongooseUri } from "@/configuration/database";
import mongoose from "mongoose";
import { isProduction } from "./configuration/environment";

let options = {};

if (isProduction) {
  options = {
    tls: true,
    tlsCAFile: `${__dirname}/../docs/global-bundle.pem`,
    retryWrites: false,
  };
}

export async function databaseConnect() {
  return mongoose.connect(mongooseUri, options);
}

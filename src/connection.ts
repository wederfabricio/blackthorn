import { mongooseUri } from "@/configuration/database";
import mongoose from "mongoose";

export async function databaseConnect() {
  return mongoose.connect(mongooseUri);
}

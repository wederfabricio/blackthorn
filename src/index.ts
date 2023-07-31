import app from "@/app";
import { databaseConnect } from "@/connection";

databaseConnect().then(() => {
  app.listen(8000, () => console.log("Running API on port 8000"));
});

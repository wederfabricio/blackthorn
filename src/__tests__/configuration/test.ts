import { mongooseUri } from "@/configuration/database";

describe("Configuration tests suite", () => {
  test("Database configuration", () => {
    expect(mongooseUri).toContain("mongodbtest");
    expect(mongooseUri).not.toContain("undefined");
  });
});

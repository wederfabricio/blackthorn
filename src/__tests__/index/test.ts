import app from "@/app";
import request from "supertest";

describe("API", () => {
  test("Should be running", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "API is running!",
    });
  });
});

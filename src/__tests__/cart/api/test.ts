import { cartData } from "@/__tests__/mocks/cart";
import app from "@/app";
import { databaseConnect } from "@/connection";
import { Cart } from "@/models/cart";
import request from "supertest";

const url = "/carts";

beforeAll(async () => {
  await databaseConnect();
});

afterAll(async () => {
  await Cart.deleteMany();
});

describe("Cart API", () => {
  test("Should create and find a cart", async () => {
    const errorCartData = {
      ...cartData,
      total: null,
    };

    const errorResponse = await request(app).post(url).send(errorCartData);

    expect(errorResponse.statusCode).toBe(400);
    expect(errorResponse.body).toEqual({
      error: {
        message:
          "Fail on save new cart: ValidationError: total: Path `total` is required.",
      },
    });

    const response = await request(app).post(url).send(cartData);

    expect(response.statusCode).toBe(201);

    const createdCart = response.body;
    expect(createdCart).toMatchObject(cartData);

    const responseGet = await request(app).get(`${url}/${createdCart._id}`);
    expect(responseGet.statusCode).toBe(200);
    expect(responseGet.body).toMatchObject(cartData);
  });

  test("Should list carts", async () => {
    const response = await request(app).get(url);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body).toMatchObject([cartData]);
  });

  test("Searching for a inexistent cart ID", async () => {
    const responseGet = await request(app).get(`${url}/inexistent-cart-id`);
    expect(responseGet.statusCode).toBe(400);
  });
});

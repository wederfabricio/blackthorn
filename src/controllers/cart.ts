import { CartRepository } from "@/repositories/cart";
import { Request, Response } from "express";

export async function create(request: Request, response: Response) {
  const repository = new CartRepository();

  try {
    const cart = await repository.create(request.body);
    return response.status(201).send(cart);
  } catch (e) {
    return response
      .status(400)
      .send({ error: { message: `Fail on save new cart: ${e}` } });
  }
}

export async function getId(request: Request, response: Response) {
  const repository = new CartRepository();
  const id = request.params.id;

  try {
    const cart = await repository.getId(id);
    return response.status(200).send(cart);
  } catch (e) {
    return response
      .status(404)
      .send({ error: { message: `Fail to get cart by ID "${id}": ${e}` } });
  }
}

export async function getAll(_: Request, response: Response) {
  const repository = new CartRepository();
  return response.status(200).send(await repository.getAll());
}

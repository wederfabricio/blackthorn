import { Router } from "express";
import { create, getAll, getId } from "@/controllers/cart";

const url = "/carts";
const router = Router();

router.post(url, create);

/**
 * @openapi
 * /carts:
 *   get:
 *     description: Get the list of carts
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Returns the cart list
 */
router.get(url, getAll);

/**
 * @openapi
 * /carts/{id}:
 *   get:
 *     description: Get a cart by id
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Cart's id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns a cart
 *       404:
 *         description: Cart not found
 */
router.get(`${url}/:id`, getId);

export default router;

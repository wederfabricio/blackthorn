import { Router } from "express";
import { create, getAll, getId } from "@/controllers/cart";

const url = "/carts";
const router = Router();

router.post(url, create);
router.get(`${url}/:id`, getId);
router.get(url, getAll);

export default router;

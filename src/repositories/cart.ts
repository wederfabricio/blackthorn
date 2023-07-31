import { Cart, CartType } from "@/models/cart";

export class CartRepository {
  getId(id: string) {
    return Cart.findById(id);
  }

  getAll() {
    return Cart.find({});
  }

  create(data: Partial<CartType>) {
    const cart = new Cart(data);
    return cart.save();
  }
}

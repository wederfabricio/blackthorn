import mongoose, { Schema } from "mongoose";

export const CartItemSchema = new Schema(
  {
    id: { type: Schema.ObjectId },
    name: { type: String },
    price: { type: Number },
  },
  {
    versionKey: false,
  }
);

export const CartSchema = new Schema(
  {
    id: { type: Schema.ObjectId },
    items: [CartItemSchema],
    subtotal: { type: Number, required: true },
    discounts: { type: Number, required: true },
    taxes: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

export const Cart = mongoose.model("Cart", CartSchema);
export type CartType = typeof Cart;

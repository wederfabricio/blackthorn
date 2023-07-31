import { cartData } from "@/__tests__/mocks/cart";
import { databaseConnect } from "@/connection";
import { Cart } from "@/models/cart";

async function seedDatabase() {
  console.info("Seeding database...");
  await databaseConnect();

  console.info("Seeding Carts");
  await Cart.insertMany([cartData]);

  console.info("Seed process finished");
}

(async () => {
  await seedDatabase();
  process.exit(0);
})();

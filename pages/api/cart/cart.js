import dbConnect from "../../../lib/db";
import { Cart } from "../../../models/cart";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const alreadyExists = await Cart.find({
        user: req.body.user,
        product: req.body.product,
      });
      if (!alreadyExists)
        return res.status(403).json({ message: "product already exists" });
      const product = await Cart.create({
        user: req.body.user,
        product: req.body.product,
      });
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else if (req.method === "GET") {
    try {
      await dbConnect();
      const cart = await Cart.find({ user: req.query.user }).populate(
        "product"
      );
      if (!cart)
        return res.status(404).json("No product was found in the cart");

      let totalItems = 0;
      for (const item of cart) {
        totalItems += item.quantity;
      }

      return res.status(200).json({ totalItems: totalItems, cart: cart });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};
export default handler;

import dbConnect from "../../../lib/db";
import { Product } from "../../../models/product";

const handler = async (req, res) => {
  try {
    await dbConnect();
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default handler;

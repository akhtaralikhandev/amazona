import { Product } from "../../../models/product";
import dbConnect from "../../../lib/db";

const handler = async (req, res) => {
  try {
    await dbConnect();
    console.log(req.query);
    const product = await Product.findById(req.query.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export default handler;

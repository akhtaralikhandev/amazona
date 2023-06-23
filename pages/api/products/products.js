import dbConnect from "../../../lib/db";
import { Product } from "../../../models/product";

const handler = async (req, res) => {
  try {
    await dbConnect();
    const products = await Product.find({
      category: req.query.category,
    });
    console.log(req.query.category);
    if (!products) return res.status({ message: "No product was found" });
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export default handler;

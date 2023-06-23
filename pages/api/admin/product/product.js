import dbConnect from "../../../../lib/db";
import { Product } from "../../../../models/product";
const handler = async (req, res) => {
  try {
    await dbConnect();
    console.log(req.body);
    const product = await Product.create({
      title: req.body.title,
      price: parseInt(req.body.price),
      quantity: parseInt(req.body.quantity),
      description: req.body.description,
      category: req.body.category,
      img: req.body.img,
    });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export default handler;

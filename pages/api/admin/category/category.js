import dbConnect from "../../../../lib/db";
import { Category } from "../../../../models/category";
const handler = async (req, res) => {
  try {
    await dbConnect();
    const category = await Category.create({
      title: req.body.title,
      img: req.body.img,
    });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export default handler;

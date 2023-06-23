import dbConnect from "../../../lib/db";
import { Category } from "../../../models/category";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const category = await Category.find();
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      return res.status(200).json(error);
    }
  }
};
export default handler;

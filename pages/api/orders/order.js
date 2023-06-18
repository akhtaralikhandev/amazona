import dbConnect from "../../../lib/db";
import { Order } from "../../../models/order";

const handler = async (req, res) => {
  try {
    await dbConnect();
    const order = await Order.create({
      user: req.user,
      product: req.product,
      quantity: req.quantity,
      totalPrice: req.totalPrice,
      status: req.status,
    });
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export default handler;

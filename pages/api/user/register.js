import dbConnect from "../../../lib/db";
import { User } from "../../../models/user";
const handler = async (req, res) => {
  await dbConnect();
  if (req.method === "POST") {
    const { username, password, email } = req.body;
    try {
      const alreadyUser = await User.findOne({ email: email });
      if (alreadyUser) {
        return res.status(403).json({ message: "Email already taken" });
      }
      const user = await User.create({
        username: username,
        password: password,
        email: email,
      });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};
export default handler;

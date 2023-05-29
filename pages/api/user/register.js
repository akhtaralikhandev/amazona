import { User } from "../../../models/user.js";
import db from "../../../lib/mongodb/index.js";
const handler = async (req, res) => {
  if (req.method === "POST") {
    await db.connect();
    const { email, username, password } = req.body;
    try {
      const findUser = await User.findOne({
        email: email,
      });
      if (findUser) return res.status(403).json("user already exists");
      const newUser = await User.create({
        username: username,
        password: password,
        email: email,
      });
      return res
        .status(200)
        .json({ message: "created successfuly", user: newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else if (req.method === "PUT") {
    try {
      await db.connect();
      const { email } = req.query;
      console.log(email);
      console.log(req.body);
      const user = await User.findOne({
        email: email,
      });
      if (!user) return res.status(404).json({ message: "No user was found" });
      const updatedUser = await User.findOneAndUpdate(
        { email: email },
        {
          $set: req.body,
        },
        { new: true }
      );
      if (!updatedUser)
        return res.status({ message: "No user was found to update" });
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } else if (req.method === "DELETE") {
    const { email } = req.query;
    try {
      const deleteUser = await User.findOneAndDelete({ email: email });
      return res.status(200).json(deleteUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
export default handler;

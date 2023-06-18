import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  img: {
    type: String,
  },
  country: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});
export const User = mongoose.models.User || mongoose.model("User", userSchema);

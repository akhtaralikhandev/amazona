import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
export const Category =
  mongoose.models.Category || mongoose.model("category", categorySchema);

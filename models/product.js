import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  availibilty: Boolean,
});

// Create a model using the schema
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

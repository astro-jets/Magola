import mongoose, { Schema, model } from "mongoose";

const PropertySchema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    details: { type: String, required: true },
    path: { type: String, required: true },
    tags: { type: [String], default: [] },
    status: { type: String, default: "sale" },
  },
  { timestamps: true }
);

export default mongoose.models.Property || model("Property", PropertySchema);

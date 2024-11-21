// models/Property.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PropertySchema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: String, required: true },
    path: { type: String, required: true },
    qrCode: {
      type: String,
    },
  },
  { timestamps: true }
);

const Property = mongoose.models.Property || model("Property", PropertySchema);

export default Property;

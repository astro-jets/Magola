// models/Purchase.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PurchaseSchema = new Schema(
  {
    user: {
      type: String,
    },
    property: {
      type: String,
    },
  },
  { timestamps: true }
);

const Purchase = mongoose.models.Purchase || model("Purchase", PurchaseSchema);

export default Purchase;

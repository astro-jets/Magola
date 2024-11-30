// models/Claim.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const ClaimSchema = new Schema(
  {
    user: {
      type: String,
    },
    property: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Claim = mongoose.models.Claim || model("Claim", ClaimSchema);

export default Claim;

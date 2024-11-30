// models/Lease.ts
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const LeaseSchema = new Schema(
  {
    user: {
      type: String,
    },
    purchase: {
      type: String,
    },
    ammount: {
      type: Number,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Lease = mongoose.models.Lease || model("Lease", LeaseSchema);

export default Lease;

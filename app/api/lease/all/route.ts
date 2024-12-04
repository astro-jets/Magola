// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Lease from "@/models/Lease";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const leasesReq = await Lease.find();
    if (!leasesReq) {
      return NextResponse.json(
        {
          status: false,
          message: "No leasesReq found.",
        },
        { status: 500 }
      );
    }

    const leases = [];

    for (const lease of leasesReq) {
      // Get the user and the property
      const property = await Property.findById(lease.property);
      const user = await User.findById(lease.user);

      // Create an object for each lease with converted image
      leases.push({
        _id: lease._id,
        createdAt: lease.createdAt,
        user,
        property,
      });
    }

    return NextResponse.json({ leases });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

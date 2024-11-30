// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Claim from "@/models/Claim";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const claimsReq = await Claim.find({ status: "pending" });
    if (!claimsReq) {
      return NextResponse.json(
        {
          status: false,
          message: "No claimsReq found.",
        },
        { status: 500 }
      );
    }

    const claims = [];

    for (const claim of claimsReq) {
      // Get the user and the property
      const property = await Property.findById(claim.property);
      const user = await User.findById(claim.user);

      // Create an object for each claim with converted image
      const convertedclaim = {
        ...claim.toObject(),
        user,
        property,
      };

      // Add the converted claim to the array
      claims.push(convertedclaim);
    }

    return NextResponse.json({ claims });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

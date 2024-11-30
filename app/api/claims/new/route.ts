import dbConnect from "@/lib/db";
import Claim from "@/models/Claim";
import Notification from "@/models/Notification";
import Property from "@/models/Property";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { user, property, message } = await req.json();

    // Validate required fields
    if (!user || !property || !message) {
      return NextResponse.json(
        {
          status: false,
          message: "All fields are required (user, property).",
        },
        { status: 400 }
      );
    }

    // Save property to the database
    const newClaim = new Claim({ user, property, message });

    console.log("New Claim => ", newClaim);

    const claimReq = await newClaim.save();

    if (!claimReq) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to save the claim.",
        },
        { status: 500 }
      );
    }
    const userReq = await User.findById(user);
    const propertyReq = await Property.findById(property);
    // Save property to the database

    const notification = new Notification({
      by: user,
      title: "New Complaint",
      for: "admin",
      property: property,
      message: `${userReq.name} filed a complaint on ${propertyReq.name}. `,
    });
    await notification.save();

    return NextResponse.json(
      {
        status: true,
        message: "Claim successfully created!",
        data: claimReq,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating claim: ", error);
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}

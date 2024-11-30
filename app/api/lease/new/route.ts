import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Lease from "@/models/Lease";
import { NextResponse } from "next/server";
import Notification from "@/models/Notification";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { user, property, ammount } = await req.json();

    // Validate required fields
    if (!user || !ammount || !property) {
      return NextResponse.json(
        {
          status: false,
          message: "All fields are required (user, property).",
        },
        { status: 400 }
      );
    }
    const userReq = await User.findById(user);
    const propertyReq = await Property.findById(property);
    // Save property to the database
    const newLease = new Lease({ user, property, ammount });

    console.log("New lease => ", newLease);

    const lease = await newLease.save();

    if (!lease) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to save the property.",
        },
        { status: 500 }
      );
    }

    const notification = new Notification({
      by: user,
      title: "Lease Payment",
      for: "admin",
      property: property,
      message: `Lease payment for ${propertyReq.name}, by ${userReq.name}. Ammount is ${ammount}`,
    });
    await notification.save();
    return NextResponse.json(
      {
        status: true,
        message: "Lease successfully created!",
        lease,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}

import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Lease from "@/models/Lease";
import User from "@/models/User";
import { createNotification } from "@/lib/notification";
import { NextResponse } from "next/server";

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

    // Fetch related user and property
    const userReq = await User.findById(user);
    const propertyReq = await Property.findById(property);

    // Save lease to the database
    const newLease = new Lease({ user, property, ammount });
    const lease = await newLease.save();

    if (!lease) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to save the lease.",
        },
        { status: 500 }
      );
    }

    // Generate a notification for the admin
    const notificationResult = await createNotification({
      by: user,
      title: "Lease Payment",
      forTarget: "admin",
      property: property,
      message: `Lease payment for ${propertyReq.name}, by ${userReq.name}. Amount is ${ammount}`,
    });

    if (!notificationResult.status) {
      console.error("Notification creation failed:", notificationResult.error);
    }

    return NextResponse.json(
      {
        status: true,
        message: "Lease successfully created!",
        lease,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lease:", error);
    return NextResponse.json(
      {
        status: false,
        message: "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}

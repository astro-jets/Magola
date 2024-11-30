import dbConnect from "@/lib/db";
import Notification from "@/models/Notification";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { user, property } = await req.json();

    // Validate required fields
    if (!user || !property) {
      return NextResponse.json(
        {
          status: false,
          message: "All fields are required (user, property).",
        },
        { status: 400 }
      );
    }

    // Save property to the database
    const newPurchase = new Purchase({ user, property });

    console.log("New property => ", newPurchase);

    const purchaseReq = await newPurchase.save();

    if (!purchaseReq) {
      return NextResponse.json(
        {
          status: false,
          message: "Failed to save the property.",
        },
        { status: 500 }
      );
    }

    // Update Property Status
    const updatedData = { $set: { status: "sold" } };
    const propertyUpdate = await Property.findOneAndUpdate(
      { _id: property },
      updatedData
    );

    if (propertyUpdate) {
      const userReq = await User.findById(user);
      const propertyReq = await Property.findById(property);

      const notification = new Notification({
        by: user,
        title: "Property Purchase",
        for: "admin",
        property: property,
        message: `Property Purchase for ${propertyReq.name}, by ${userReq.name}.`,
      });
      await notification.save();
      return NextResponse.json(
        {
          status: true,
          message: "Purchase successfully created!",
          data: purchaseReq,
        },
        { status: 201 }
      );
    }
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

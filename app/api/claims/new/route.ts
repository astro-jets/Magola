import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
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

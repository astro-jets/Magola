import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const { _id, name, cost, details, path, tags } = await req.json();

    // Validate required fields
    if (!_id) {
      return NextResponse.json(
        { success: false, message: "Property ID is required" },
        { status: 400 }
      );
    }

    // Find and update the property
    const updatedProperty = await Property.findByIdAndUpdate(
      _id,
      { name, cost, details, path, tags },
      { new: true } // Return the updated document
    );

    if (!updatedProperty) {
      return NextResponse.json(
        { success: false, message: "Property not found" },
        { status: 404 }
      );
    }

    // Respond with success
    return NextResponse.json({
      success: true,
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error: any) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

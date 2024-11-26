import dbConnect from "@/lib/db";
import Purchase from "@/models/Purchase";
import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";

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
    const newPurchase = new Purchase({ user: user, property: property });

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

    return NextResponse.json(
      {
        status: true,
        message: "Purchase successfully created!",
        data: purchaseReq,
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

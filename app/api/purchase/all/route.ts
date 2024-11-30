// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const purchasesReq = await Purchase.find();
    if (!purchasesReq) {
      return NextResponse.json(
        {
          status: false,
          message: "No purchasesReq found.",
        },
        { status: 500 }
      );
    }

    const purchases = [];

    for (const purchase of purchasesReq) {
      // Get the user and the property
      const property = await Property.findById(purchase.property);
      const user = await User.findById(purchase.user);

      // Create an object for each purchase with converted image
      const convertedpurchase = {
        createdAt: purchase.createdAt,
        user,
        property,
      };

      // Add the converted purchase to the array
      purchases.push(convertedpurchase);
    }

    return NextResponse.json({ purchases });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

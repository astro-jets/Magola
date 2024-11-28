// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("user");

    const purchases = await Purchase.find({ user: id });
    if (!purchases) {
      return NextResponse.json(
        {
          status: false,
          message: "No purchases found.",
        },
        { status: 500 }
      );
    }

    const properties = [];
    const user = await User.findById(id);

    const trimStory = async (details: String) => {
      const words = details.split(" ");
      const trimmedWords = words.slice(0, 8);
      const trimmedParagraph = trimmedWords.join(" ");
      return trimmedParagraph;
    };

    for (const purchase of purchases) {
      const property = await Property.findById(purchase.property);

      // Convert image for each property
      const details = await trimStory(property.details);
      // Create an object for each property with converted image
      const convertedproperty = {
        ...property.toObject(),
        details: details,
      };

      // Add the converted property to the array
      properties.push(convertedproperty);
    }

    const res = { user, properties };

    return NextResponse.json({ res });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

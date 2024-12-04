// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const propertiesReq = await Property.find();
    if (!propertiesReq) {
      return NextResponse.json(
        {
          status: false,
          message: "No propertiesReq found.",
        },
        { status: 500 }
      );
    }

    const propertysOBJ = [];

    const trimStory = async (details: String) => {
      const words = details.split(" ");
      const trimmedWords = words.slice(0, 8);
      const trimmedParagraph = trimmedWords.join(" ");
      return trimmedParagraph;
    };

    for (const property of propertiesReq) {
      // Convert image for each property
      const details = await trimStory(property.details);
      // Create an object for each property with converted image
      const convertedproperty = {
        ...property.toObject(),
        details: details,
      };

      // Add the converted property to the array
      propertysOBJ.push(convertedproperty);
    }

    return NextResponse.json({ propertysOBJ });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

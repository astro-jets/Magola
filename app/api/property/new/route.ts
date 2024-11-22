import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.formData();

    // Extract fields
    const file = data.get("file") as unknown as File;
    const cost = data.get("cost") as string | null;
    const name = data.get("name") as string | null;
    const categories = data.get("categories") as string | null; // tags array sent as JSON string

    // Validate required fields
    if (!file || !cost || !name || !categories) {
      return NextResponse.json(
        {
          status: false,
          message: "All fields are required (file, cost, name, categories).",
        },
        { status: 400 }
      );
    }

    // Parse categories
    let tags: string[] = [];
    try {
      tags = JSON.parse(categories);
    } catch (error) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid categories format. Expected a JSON array.",
        },
        { status: 400 }
      );
    }

    // Save file to public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pathToPublic = join(process.cwd(), "public", "uploads");
    const filePath = join(pathToPublic, file.name);

    await writeFile(filePath, buffer);
    console.log(`File saved at: ${filePath}`);

    // Save property to the database
    const newProperty = new Property({
      name,
      cost,
      path: `/uploads/${file.name}`, // Save relative path to public folder
      tags,
    });

    console.log("New property => ", newProperty);

    const property = await newProperty.save();

    if (!property) {
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
        message: "Property successfully created!",
        data: property,
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

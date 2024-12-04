import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import { join } from "path";

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();

    // Validate ID
    if (!id) {
      return NextResponse.json(
        { status: false, message: "Property ID is required." },
        { status: 400 }
      );
    }

    // Find and delete the property
    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return NextResponse.json(
        { status: false, message: "Property not found or already deleted." },
        { status: 404 }
      );
    }

    // Delete the associated file
    const filePath = join(process.cwd(), "public", property.path);
    try {
      await unlink(filePath);
      console.log(`File deleted: ${filePath}`);
    } catch (error) {
      console.error(`Failed to delete file: ${filePath}`, error);
    }

    return NextResponse.json(
      { status: true, message: "Property successfully deleted!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { status: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

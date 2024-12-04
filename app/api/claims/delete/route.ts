import dbConnect from "@/lib/db";
import Claim from "@/models/Claim";
import Notification from "@/models/Notification";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { id } = await req.json();

    // Validate ID
    if (!id) {
      return NextResponse.json(
        { status: false, message: "Claim ID is required." },
        { status: 400 }
      );
    }

    // Delete the claim
    const deletedClaim = await Claim.findByIdAndDelete(id);
    if (!deletedClaim) {
      return NextResponse.json(
        { status: false, message: "Claim not found or already deleted." },
        { status: 404 }
      );
    }

    // Optional: Create a notification for deletion
    await new Notification({
      title: "Claim Deleted",
      for: "admin",
      message: `A claim (ID: ${id}) was deleted.`,
    }).save();

    return NextResponse.json(
      { status: true, message: "Claim successfully deleted!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting claim:", error);
    return NextResponse.json(
      { status: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

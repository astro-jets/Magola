// api/claims/new
import dbConnect from "@/lib/db";
import Claim from "@/models/Claim";
import Notification from "@/models/Notification";
import Property from "@/models/Property";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const { id, status } = await req.json();

    const claimReq = await Claim.findById(id);
    if (!claimReq) {
      return NextResponse.json(
        { message: "Could not find that claim" },
        { status: 404 }
      );
    }
    const user = await User.findById(claimReq.user);
    const property = await Property.findById(claimReq.property);

    const updatedData = { $set: { status: status } };
    const claims = await Claim.findOneAndUpdate({ _id: id }, updatedData);

    if (!claims) {
      return NextResponse.json(
        { message: "Failed to update claims" },
        { status: 404 }
      );
    }
    const notification = new Notification({
      by: "system",
      title: "Claim Request",
      for: user.id,
      property: property._id,
      message: `Your complaint request for ${property.name} has been ${status}`,
    });
    await notification.save();

    return NextResponse.json({ claims }, { status: 201 });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: "Error creating claim",
    });
  }
}

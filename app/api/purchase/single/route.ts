// pages/api/signup.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import User from "@/models/User";
import moment from "moment";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await dbConnect();

    const assetObj = await Property.findById(id);
    if (!assetObj) {
      return NextResponse.json(
        {
          status: false,
          message: "No Assets found.",
        },
        { status: 500 }
      );
    }
    const purchase = await Purchase.findOne({ property: assetObj._id });
    if (purchase) {
      const user = await User.findById(purchase.user);
      const property = {
        ...assetObj._doc,
        bought_on: moment(purchase.createdAt).calendar(),
        user: user,
      };
      return NextResponse.json({ property }, { status: 201 });
    } else {
      const property = assetObj;
      return NextResponse.json({ property }, { status: 201 });
    }
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: error,
    });
  }
}

// pages/api/ClientStats.ts//
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const propertiesCount = await Property.countDocuments();
    const purchasesCount = await Purchase.countDocuments();
    const properties = await Property.find();

    let propertiesRevenue = 0;

    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      propertiesRevenue += parseInt(property.cost);
    }

    const stats = {
      properties: propertiesCount,
      purchases: purchasesCount,
      revenue: propertiesRevenue,
    };

    return NextResponse.json({ stats }, { status: 201 });
  } catch (error) {
    console.log("Zakanika => ", error);
    return NextResponse.json({
      status: false,
      message: `Error fetching User ${error}`,
    });
  }
}

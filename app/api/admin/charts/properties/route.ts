// pages/api/propertys.ts
import dbConnect from "@/lib/db";
import Property from "@/models/Property";
import Purchase from "@/models/Purchase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  await dbConnect();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Aggregate purchasess
  const purchasesData = await Purchase.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        count: { $sum: 1 },
      },
    },
  ]);

  // Aggregate propertys
  const propertyData = await Property.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        count: { $sum: 1 },
      },
    },
  ]);

  // Initialize monthly array
  const monthly = months.map((month) => ({
    date: month,
    properties: 0,
    Purchases: 0,
  }));

  // Populate monthly array with data
  purchasesData.forEach(({ _id, count }) => {
    monthly[_id - 1]["Purchases"] = count;
  });

  propertyData.forEach(({ _id, count }) => {
    monthly[_id - 1]["properties"] = count;
  });

  return NextResponse.json({ monthly }, { status: 201 });
}

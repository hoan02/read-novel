import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb/mongoose";

export async function GET(req, context) {
  const { params } = context;
  await connectToDB();
  
  return NextResponse.json({ id: params.idNovel }, { status: 200 });
}

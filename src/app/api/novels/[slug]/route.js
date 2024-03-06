import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";

export async function GET(req, context) {
  const { params } = context;
  try {
    await connectToDB();
    const novel = await Novel.findOne({ slug: params.slug });
    return NextResponse.json(novel, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novel" + error, {
      status: 500,
    });
  }
}

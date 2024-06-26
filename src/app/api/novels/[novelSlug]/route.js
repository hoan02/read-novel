import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";

export const GET = async (req, context) => {
  const { params } = context;
  try {
    await connectToDB();
    const novel = await Novel.findOne({ slug: params.novelSlug });
    if (!novel) {
      return new NextResponse("Novel not found", { status: 404 });
    }
    return NextResponse.json(novel, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novel" + error, {
      status: 500,
    });
  }
};

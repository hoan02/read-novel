import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";

export const GET = async (req, context) => {
  const { params } = context;
  try {
    await connectToDB();
    const novel = await Novel.findOne({ slug: params.novelSlug })
      .populate("chapters")
      .select("chapters.chapterNumber chapters.chapterName");
    if (!novel) {
      return new NextResponse("Novel not found", { status: 404 });
    }
    const chapters = novel.chapters;

    return NextResponse.json(chapters, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novel" + error, {
      status: 500,
    });
  }
};

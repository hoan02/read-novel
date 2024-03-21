import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";
import Chapter from "@/lib/models/chapter.model";

export const GET = async (req, context) => {
  const { params } = context;
  try {
    await connectToDB();
    const novel = await Novel.findOne({ slug: params.novelSlug });
    if (!novel) {
      return new NextResponse("Novel not found", { status: 404 });
    }
    const chapter = await Chapter.findOne({
      novelId: novel._id,
      chapterNumber: params.numberChapter,
    });
    if (!chapter) {
      return new NextResponse("Chapter not found", { status: 404 });
    }
    return NextResponse.json(
      { chapter: chapter, totalChapters: novel.numberOfChapter },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Error in fetching novel" + error, {
      status: 500,
    });
  }
};


export const dynamic = "force-dynamic";
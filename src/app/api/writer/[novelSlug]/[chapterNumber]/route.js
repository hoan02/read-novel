import { NextResponse } from "next/server";
import Novel from "@/lib/models/novel.model";
import { connectToDB } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";
import Chapter from "@/lib/models/chapter.model";

export const GET = async (req, context) => {
  const { params } = context;
  console.log(params.novelSlug);
  try {
    await connectToDB();
    const novel = await Novel.findOne({ slug: params.novelSlug });

    if (!novel) {
      return new NextResponse("Novel not found", { status: 404 });
    }

    const chapter = await Chapter.findOne({
      novelId: novel._id,
      chapterNumber: params.chapterNumber,
    });

    if (!chapter) {
      return new NextResponse("Chapter not found", { status: 404 });
    }

    return NextResponse.json(chapter, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching chapters: " + error, {
      status: 500,
    });
  }
};

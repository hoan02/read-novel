import { NextResponse } from "next/server";
import Novel from "@/lib/models/novel.model";
import { connectToDB } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";
import Chapter from "@/lib/models/chapter.model";

export const GET = async (req, context) => {
  const { params } = context;
  try {
    await connectToDB();
    const chapters = await Chapter.find({ novelSlug: params.novelSlug });

    return NextResponse.json(chapters, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching chapters: " + error, {
      status: 500,
    });
  }
};

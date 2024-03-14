import { NextResponse } from "next/server";
import Novel from "@/lib/models/novel.model";
import { connectToDB } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";

export const GET = async () => {
  const { userId } = auth();

  try {
    await connectToDB();
    const novels = await Novel.find({
      uploader: userId,
    });
    return NextResponse.json(novels, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novels" + error, {
      status: 500,
    });
  }
};

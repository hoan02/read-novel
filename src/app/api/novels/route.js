import { NextResponse } from "next/server";
import Novel from "@/lib/models/novel.model";
import { connectToDB } from "@/lib/mongodb/mongoose";


export const GET = async () => {
  try {
    await connectToDB();
    const novels = await Novel.find({});
    return NextResponse.json(novels, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novels" + error, {
      status: 500,
    });
  }
};

export const dynamic = "force-dynamic";



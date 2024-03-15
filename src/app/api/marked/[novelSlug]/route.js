import { NextResponse } from "next/server";
import Marked from "@/lib/models/marked.model";
import { connectToDB } from "@/lib/mongodb/mongoose";
import { auth } from "@clerk/nextjs";

export const GET = async (req, context) => {
  const { params } = context;
  const { userId } = auth();
  try {
    await connectToDB();
    const marked = await Marked.findOne({
      clerkId: userId,
      novelSlug: params.novelSlug,
    });

    if (!marked) {
      const res = {
        clerkId: userId,
        novelSlug: params.novelSlug,
        chapterNumber: 0,
      };
      return NextResponse.json(res, { status: 200 });
    }

    return NextResponse.json(marked, { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching novels" + error, {
      status: 500,
    });
  }
};

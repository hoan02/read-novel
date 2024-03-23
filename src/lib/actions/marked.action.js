"use server";

import { connectToDB } from "@/lib/mongodb/mongoose";
import Marked from "@/lib/models/marked.model";
import { auth } from "@clerk/nextjs";

export const createOrUpdateMark = async (novelSlug, chapterNumber) => {
  try {
    const { userId } = auth();
    await connectToDB();
    await Marked.findOneAndUpdate(
      {
        clerkId: userId,
        novelSlug,
      },
      { $set: { chapterNumber } },
      { upsert: true }
    );
    return { success: true, message: "Đánh dấu thành công!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể đánh dấu!");
  }
};

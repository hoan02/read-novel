"use server";

import { connectToDB } from "@/lib/mongodb/mongoose";
import Rating from "@/lib/models/rating.model";
import Novel from "@/lib/models/novel.model";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const createOrUpdateRating = async (formData) => {
  const { novelSlug, valueCharacter, valuePlot, valueWorld, ratingContent } =
    formData;
  try {
    const { userId } = auth();
    await connectToDB();

    let existingRating = await Rating.findOneAndUpdate(
      { novelSlug, clerkId: userId },
      {
        $set: {
          valueCharacter,
          valuePlot,
          valueWorld,
          ratingContent,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    if (existingRating.isNew) {
      await Novel.updateOne(
        { slug: novelSlug },
        { $inc: { numberOfRating: 1 } }
      );
    }
    revalidatePath("/truyen");
    return { success: true, message: "Đánh giá thành công!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể đánh giá!");
  }
};

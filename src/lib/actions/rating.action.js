"use server";

import { connectToDB } from "@/lib/mongodb/mongoose";
import Rating from "@/lib/models/rating.model";
import Novel from "@/lib/models/novel.model";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const createOrUpdateRating = async (formData) => {
  const { novelId, valueCharacter, valuePlot, valueWorld, ratingContent } = formData;
  try {
    const { userId } = auth();
    await connectToDB();

    const filter = { novelId, clerkId: userId };
    const update = {
      $set: {
        valueCharacter,
        valuePlot,
        valueWorld,
        ratingContent,
      },
    };

    let existingRating = await Rating.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });

    const novel = await Novel.findById(novelId);

    if (!novel) {
      throw new Error("Truyện không tồn tại");
    }

    if (!novel.ratings.includes(existingRating._id)) {
      await Novel.findByIdAndUpdate(novelId, {
        $push: { ratings: existingRating._id },
        $inc: { numberOfRating: 1 },
      });
    }

    revalidatePath("/truyen");
    return { success: true, message: "Đánh giá thành công!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể đánh giá!");
  }
};

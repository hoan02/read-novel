"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Chapter from "@/lib/models/chapter.model";
import Novel from "@/lib/models/novel.model";

export const createChapter = async (formData) => {
  const { novelId, chapterName, chapterNumber, content, addChapterType } =
    formData;
  try {
    await connectToDB();
    if (addChapterType === "insert") {
      const chaptersToUpdate = await Chapter.find({
        novelId: novelId,
        chapterNumber: { $gte: chapterNumber },
      });

      for (const chapter of chaptersToUpdate) {
        chapter.chapterNumber += 1;
        await chapter.save();
      }
    }

    const newChapter = await Chapter.create({
      novelId,
      chapterName,
      chapterNumber,
      content,
    });

    await Novel.findByIdAndUpdate(novelId, {
      $push: { chapters: newChapter._id },
      $inc: { numberOfChapter: 1 },
    });

    revalidatePath("/writer");
    return { success: true, message: "Chương đã được tạo thành công!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể tạo chương!");
  }
};

export const updateChapter = async (formData) => {
  const { chapterId, chapterName, chapterNumber, content } = formData;
  try {
    await connectToDB();
    const Chapter = await Chapter.findByIdAndUpdate(
      chapterId,
      {
        chapterName,
        chapterNumber,
        content,
      },
      {
        new: true,
      }
    );
    if (!Chapter) {
      throw new Error("Không tìm thấy truyện!");
    }
    return { success: true, message: "Truyện đã được cập nhật!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể cập nhật truyện!");
  }
};

export const deleteChapter = async (chapterId) => {
  try {
    await connectToDB();
    const chapter = await Chapter.findByIdAndDelete(chapterId);
    if (!chapter) {
      throw new Error("Không tìm thấy chương!");
    }
    return { success: true, message: "Chương đã được xóa!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể xóa chương!");
  }
};

"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";
import { generateSlug } from "@/utils/generateSlug";

const { userId } = auth();

export const createNovel = async (formData) => {
  const { name, type, author, description, urlCover } = formData;
  const slug = generateSlug(name);
  try {
    await connectToDB();
    const newNovel = new Novel({
      name,
      slug,
      type,
      author,
      description,
      urlCover,
      uploader: userId,
    });
    await newNovel.save();
    revalidatePath("/writer");
    return { success: true, message: "Truyện đã được tạo thành công!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể tạo truyện!");
  }
};

export const updateNovel = async (formData) => {
  const { novelId, name, type, author, urlCover, description } = formData;
  const slug = generateSlug(name);
  try {
    await connectToDB();
    const novel = await Novel.findByIdAndUpdate(
      novelId,
      {
        name,
        slug,
        type,
        author,
        urlCover,
        description,
      },
      {
        new: true,
      }
    );
    if (!novel) {
      throw new Error("Không tìm thấy truyện!");
    }
    return { success: true, message: "Truyện đã được cập nhật!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể cập nhật truyện!");
  }
};

export const deleteNovel = async (novelId) => {
  try {
    await connectToDB();
    const novel = await Novel.findByIdAndDelete(novelId);
    if (!novel) {
      throw new Error("Không tìm thấy truyện!");
    }
    return { success: true, message: "Truyện đã được xóa!" };
  } catch (error) {
    console.error(error);
    throw new Error("Không thể xóa truyện!");
  }
};

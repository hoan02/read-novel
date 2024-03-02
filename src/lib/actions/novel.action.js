"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "@/lib/mongodb/mongoose";
import Novel from "@/lib/models/novel.model";

export const createNovel = async (formData) => {
  const { name, type, author, description } = Object.fromEntries(formData);
  try {
    await connectToDB();
    const newNovel = new Novel({
      name,
      type,
      author,
      description,
    });
    await newNovel.save();
    revalidatePath("/writer");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create novel!");
  }
};

export const updateNovel = async (novelId, newData) => {
  try {
    await connectToDB();
    const novel = await Novel.findByIdAndUpdate(novelId, newData, {
      new: true,
    });
    if (!novel) {
      throw new Error("Novel not found!");
    }
    return novel;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update novel!");
  }
};

export const deleteNovel = async (novelId) => {
  try {
    await connectToDB();
    const novel = await Novel.findByIdAndDelete(novelId);
    if (!novel) {
      throw new Error("Novel not found!");
    }
    return novel;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete novel!");
  }
};

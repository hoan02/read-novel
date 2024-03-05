"use server";

export const createImage = async (file) => {
  try {
    await connectToDB();
    const novel = await Novel.findOne({ uploader: userId });
    if (!novel) {
      throw new Error("Không tìm thấy truyện!");
    }
    return novel;
  } catch (error) {
    console.error(error);
    throw new Error("Không thể lấy truyện!");
  }
};

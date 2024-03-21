import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    novelSlug: {
      type: String,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
    chapterNumber: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isLock: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 200,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Chapter =
  mongoose.models.Chapter || mongoose.model("Chapter", chapterSchema);

export default Chapter;

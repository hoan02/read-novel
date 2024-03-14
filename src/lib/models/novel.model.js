import mongoose from "mongoose";
import Chapter from "./chapter.model";

const novelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    urlCover: {
      type: String,
      required: true,
    },
    uploader: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nominations: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reads: {
      type: Number,
      default: 0,
    },
    numberOfRating: {
      type: Number,
      default: 0,
    },
    state: {
      type: String,
      default: "Đang ra",
    },
    numberOfChapter: {
      type: Number,
      default: 0,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    chapters: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
      default: [],
    },
  },
  { timestamps: true }
);

novelSchema.index({ name: "text" });

novelSchema.pre("findOneAndDelete", async function (next) {
  try {
    const chapterIds = this.get("chapters");

    if (chapterIds) {
      await Chapter.deleteMany({ _id: { $in: chapterIds } });
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Novel = mongoose.models?.Novel || mongoose.model("Novel", novelSchema);

export default Novel;

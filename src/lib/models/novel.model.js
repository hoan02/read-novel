import mongoose from "mongoose";
import Chapter from "./chapter.model";
import Rating from "./rating.model";
import Marked from "./marked.model";

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
    numberOfComment: {
      type: Number,
      default: 0,
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

novelSchema.index({ name: "text" });

const Novel = mongoose.models?.Novel || mongoose.model("Novel", novelSchema);

export default Novel;

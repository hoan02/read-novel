import mongoose from "mongoose";

const NovelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    reads: {
      type: Number,
      require: true,
      default: 0,
    },
    image: {
      type: String,
      require: true,
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Novel",
    },
    description: {
      type: String,
      require: true,
      default: "Mô tả truyện đọc",
      validate: {
        validator: (item) => {
          return item.length > 10;
        },
        message: "Nội dung phải dài hơn 10 kí tự",
      },
    },
    numberOfRating: {
      type: Number,
      require: true,
      default: 0,
    },
    state: {
      type: String,
      require: true,
      default: "Đang ra",
    },
    url: {
      type: String,
      require: true,
    },
    numberOfChapter: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

NovelSchema.index({ name: "text" });

const Novel = mongoose.models.Novel || mongoose.model("Novel", NovelSchema);

export default Novel;
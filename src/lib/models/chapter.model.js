import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema({
  chapterNumber: {
    type: Number,
    require: true,
    default: 0,
  },
  content: {
    type: String,
    require: true,
    default: "Nội dung chương",
    validate: {
      validator: (item) => {
        return item.length > 10;
      },
      message: "Nội dung phải dài hơn 10 kí tự",
    },
  },
  chapterName: {
    type: String,
    require: true,
  },
  isLock: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    default: 200,
  },
});

const Chapter =
  mongoose.models.Chapter || mongoose.model("Chapter", ChapterSchema);

export default Chapter;

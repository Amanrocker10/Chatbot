import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const CategorySchema = mongoose.Schema(
  {
    categoryType: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
    },
    categoryPhoto: {
      type: String,
      required: true,
      default:
        "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg",
    },
    items: [
      {
        type: ObjectId,
        ref: "MenuItem",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);

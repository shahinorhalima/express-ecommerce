import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: [true, "please provide a brand name"],
      unique: true,
      default: "",
    },
    brandLogo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;

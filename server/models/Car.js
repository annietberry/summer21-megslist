import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    make: {type: String, required: true },
    model: {type: String, required: true },
    price: {type: Number, required: true, min: 0},
    year: {type: Number, min: 1700, max: 9999 },
    imgUrl: {type: String, default: "https://www.pinclipart.com/picdir/middle/548-5480712_generic-placeholder-image-transparent-car-accident-icon-clipart.png" },
    color: {type: String, default: "#000" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;

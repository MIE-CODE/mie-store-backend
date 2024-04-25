const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  category: {
    type: String,
    required: [true, "Category field is required"],
  },
  price: {
    type: Number,
    required: [true, "Price field is required"],
  },
  image_url: {
    type: String,
    required: [true, "Image field is required"],
  },
  about: {
    type: String,
    required: [true, "About field is required"],
  },
  size: {
    type: [String],
  },
  color: {
    type: [String],
  },
  quantity: {
    type: Number,
    required: [true, "Amount field is required"],
  },
});
const Product = mongoose.model("product", productSchema);

module.exports = Product;

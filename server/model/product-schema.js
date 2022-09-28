import mongoose from "mongoose";
import { StringDecoder } from "string_decoder";

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model('product', productSchema);

export default Product;

import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures the product has an owner
    },
    name: {
        type: String,
        required: [true, "Product name is required"], // Updated error message
    },
    image: {
        type: String,
        required: [true, "A URL to the product image is required"], // Updated error message
    },
    price: {
        type: Number, // Changed to `Number` for consistency
        required: false, // Price is optional
    },
    type: {
        type: String,
        enum: ["physical", "service", "digital", "food"],
        default: "private", // Default type if not provided
    },
    description: {
        type: String,
        required: false, // Optional description
    },
    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },
    updated_at: {
        type: Date,
        default: Date.now, // Ensures `updated_at` is initialized
        index: true,
    },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;

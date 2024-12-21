import { Schema, model, models } from "mongoose";


const ProductSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Some text is required"]
    },
    image: {
        type: String,
        required: [true, "url to product image"]
    },
    price: {
        type: String,
        required: [false, "Title is not required"]
    },
    type: {
        type: String,
        enum: ["physical", "service", "digital", "food"],
        default: "private",
    },
    description: {
        type: String,
        required: [false, "Description is required"]
    },
    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },
    updated_at: {
        type: Date,
        index: true
    }
})

const Product = models.Product || model("Product", ProductSchema)


export default Product


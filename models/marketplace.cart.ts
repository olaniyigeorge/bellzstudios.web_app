import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures a cart is always tied to an owner
    },
    name: {
        type: String,
        required: false, // This can simply be false without an array
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product", // Reference to the Product model
        },
    ],
    type: {
        type: String,
        enum: ["physical", "service", "digital", "food"],
        default: "private", // Default type if not provided
    },
    status: {
        type: String,
        enum: ["pending", "cleared"],
        default: "pending", // Default status
    },
    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },
    updated_at: {
        type: Date,
        default: Date.now, // Ensures updated_at is initialized
        index: true,
    },
});

const Cart = models.Cart || model("Cart", CartSchema);

export default Cart;

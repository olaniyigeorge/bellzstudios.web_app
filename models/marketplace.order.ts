import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User", // References the User model
        required: true, // Ensure an order always has a buyer
    },
    orderId: {
        type: String,
        required: [true, "An ID is required for this order"], // Improved error message
        unique: true, // Ensures order IDs are unique
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product", // References the Product model
            required: true, // Ensure each order has products
        },
    ],
    status: {
        type: String,
        enum: ["pending", "paid", "escrow", "shipped", "completed"], // Added more possible statuses
        default: "pending", // Default status
    },
    created_at: {
        type: Date,
        default: Date.now,
        index: true, // Index to optimize queries
    },
    updated_at: {
        type: Date,
        default: Date.now, // Ensures `updated_at` is initialized
        index: true,
    },
});

// Create the Order model if it doesn't already exist
const Order = models.Order || model("Order", OrderSchema);

export default Order;

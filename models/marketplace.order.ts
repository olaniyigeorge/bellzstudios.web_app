import { Schema, model, models } from "mongoose";
import Product from "./marketplace.product";


const OrderSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orderId: {
        type: String,
        required: [true, "An id is required for this order"]
    },
    products: {
        type: Product,
        enum: Product,
        required: [true, "products field can't be empty or order"]
    },
    status: {
        type: String,
        enum: ["pending", "paid", "escrow"],
        default: "pending"
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

const Order = models.Product || model("Order", OrderSchema)


export default Order


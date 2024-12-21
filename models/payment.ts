import { Schema, model, models } from "mongoose";


const PaymentSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    amount: {
        type: Float64Array,
        required: [true, "An amount is required for this payment"]
    },
    intent: {
        type: String,
        enum: ["marketplace-order", "product", "digital", "food"],
        default: "private",
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "private",
    },
})

const Payment = models.Payment || model("Payment", PaymentSchema)


export default Payment
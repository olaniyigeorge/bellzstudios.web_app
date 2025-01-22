import { Schema, model, models } from "mongoose";

const ProductTesterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telegram_id: {
        type: String,
        default: null,
    },
    product: {
        type: String,
        required: true,
    },
    discovery_location: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ProductTester = models.ProductTester || model("ProductTester", ProductTesterSchema);

export default ProductTester;
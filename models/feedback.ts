
import {Schema, models, model} from "mongoose";


const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});


const Feedback = models.Feedback || model("Feedback", feedbackSchema);

export default Feedback


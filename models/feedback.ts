
import {Schema, models, model} from "mongoose";


const feedbackSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    }
});


const Feedback = models.Feedback || model("Feedback", feedbackSchema);

export default Feedback


import { Schema, model, models } from "mongoose";


const NoteEntrySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    body: {
        type: String,
        required: [true, "Some text is required"]
    },
    title: {
        type: String,
        required: [false, "Title is not required"]
    },
    image: {
        type: String,
        required: [false, "Image is not required"]
    },
    tags: {
        type: [String],
        default: [], 
    },
    privacy_level: {
        type: String,
        enum: ["public", "private", "restricted"],
        default: "private",
    },
    description: {
        type: String,
        required: [false, "Description is required"]
    },
    written_at: {
        type: Date,
        default: Date.now,
        index: true,
    },
    updated_at: {
        type: Date,
        index: true
    }
})

const NoteEntry = models.NoteEntry || model("NoteEntry", NoteEntrySchema)


export default NoteEntry


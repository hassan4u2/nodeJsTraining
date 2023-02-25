import { Schema, model, Types } from "mongoose"




const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    // reference to the user who created the comment
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    { timestamps: true })


const commentModel = model("Comment", commentSchema)

export {
    commentModel
}
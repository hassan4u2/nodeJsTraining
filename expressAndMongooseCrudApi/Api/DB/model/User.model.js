import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    cliName: {
        type: String,
        required: true
    },
    cliEmail: {
        type: String,
        required: true,
        unique: true
    },
    cliPassword: {
        type: String,
        required: true
    },
    cliAge: {
        type: Number,
        required: true
    },
    cliConfirmed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// create a model from the schema
const userModel = model('User', userSchema);


// export the model
export {
    userModel,
}
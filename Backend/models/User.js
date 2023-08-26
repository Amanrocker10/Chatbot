import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // isAdmin: {
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // },
    // resetToken: {
    //     type: String,
    // },
    // expireToken: {
    //     type: String,
    // },
    dob: {
        type: Date,
        required: true
    }
},{timestamps: true});

export default mongoose.model("User",UserSchema);
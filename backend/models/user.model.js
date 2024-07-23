import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
    }

});

const authModel = mongoose.model("User", authSchema);

export default authModel;
import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Enter the unique Id."]
    },
    name: {
        type: String,
        required: [true, "Enter your name."]
    },
    email: {
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "Add product email."],
        validate: validator.default.isEmail
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: [true, "Enter your age."]
    },
    photo: {
        type: String,
        required: [true, "Add product image."]
    },
    dob: {
        type: Date,
        required: [true, "enter your dob."]
    },
}, {
    timestamps: true
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if ((today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth()) && today.getDate() < dob.getDate()) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);

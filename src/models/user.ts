import mongoose from "mongoose"

const schema = new mongoose.Schema({
    _id:{
        type: String,
        required: [true, "Enter the unique Id."]
    },
    name:{
        type: String,
        required: [true, "Add product image."]
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    gender:{
        type: String,
        enum: ["Male", "Female"],
        required: [true, "Enter your age."]
    },
    photo:{
        type: String,
        required: [true, "Add product image."]
    }
},
{
    timestamps: true
});


export const User = mongoose.model("User", schema);
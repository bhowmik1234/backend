import mongoose from "mongoose";
const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: [{
            type: mongoose.Types.ObjectId,
            ref: "Product",
            required: true,
        }],
});
export const WishList = mongoose.model("WishList", schema);

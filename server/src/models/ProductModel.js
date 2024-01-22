import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        author: {type: String, required: true},
        avatar: {type: String, required: true},
        image: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Product", ProductModel)
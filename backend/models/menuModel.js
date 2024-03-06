import mongoose from "mongoose";

const MenuSchema = mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        size: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);
export const Menu = mongoose.model('Menu', MenuSchema);
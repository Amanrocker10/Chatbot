import mongoose from 'mongoose';

const MenuItemSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type:String,
    },
    photo: {
        type: String,
    },
    ingredients: [{
        type: String,
    }],
    category: {
        id: String,
        name: String,
    },
    currency: {
        type: String,
        enum:['GBP','INR'],
        default:'GBP',
    },
},{timestamps: true});

export default mongoose.model("MenuItem",MenuItemSchema);
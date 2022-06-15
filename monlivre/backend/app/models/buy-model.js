import mongoose from "mongoose";

const buySchema = new mongoose.Schema({
    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
        
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    status: {
        type: String,
        default: 'buy'
    },
    date:{
        type: Date,
        required: true,
    },

    paymentType: {
        type: String,
        default: null, 
        enum: ['stripe', 'cash on delivery'],

    }

} ,{timestamps: true}
)

export default buySchema
import mongoose from 'mongoose';

const ReseravtionSchema = new mongoose.Schema({
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
        default: 'reserve'
    },
    date_from:{
        type: Date,
        required: true,
    },
    date_to: {
        type: Date,
        required: true,
    },
} 
,{timestamps: true}
)

export default ReseravtionSchema;
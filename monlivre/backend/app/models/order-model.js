import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({

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
        default: null,
        required: [true, 'please choose type of order'],
        enum:['buy', 'reserve']
    },
    date:{
        type: Date,
        required: true,
    },

  

})

export default OrderSchema
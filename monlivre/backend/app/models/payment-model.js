import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    buyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'buy'
    }
})

export default paymentSchema;
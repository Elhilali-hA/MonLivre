import mongoose from 'mongoose';



const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'book must have a title'],
    unique: true,
  }, 
  description: {
    type: String,
    // validate: ['Please enter a valid email'],
    required: [true, 'book must have a description'],
    unique: true,
  },
  price: {
    type: String,
    required: [true, 'book must have a price'],
  },
  type:{
    type: String,
    required: [true, 'book must have a type']
  },
  image: {
    type: String,
    required: [true, 'book must have a img'],
  },
  status: {
    type: String,
    required: false,
    default: 'available',
    enum: ['available', 'non available'],

    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    
});



export default BooksSchema;
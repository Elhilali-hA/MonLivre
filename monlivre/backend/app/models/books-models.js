import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'


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
    type: Array,
    minItems: {
        value: 1,
        message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
    },
    maxItems: {
        value: 8,
        message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
    },
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


BooksSchema.plugin(arrayValidator);

export default BooksSchema;
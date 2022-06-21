import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user must have a name'],
    unique: true,
  }, 
  email: {
    type: String,
    // validate: ['Please enter a valid email'],
    required: [true, 'user must have a email'],
    unique: true,
  },
  age:{
    type: Number,
    required: [true, 'enter your age']
  },
  adress: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'user must have a password'],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    required: false,
    default: 'admin',
    

    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    passwordChangedAt: {
        type: Date,
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpires: {
        type: Date,
    },
});

AdminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

export default AdminSchema;
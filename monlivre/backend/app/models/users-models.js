import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user must have a name'],
    unique: true,
  }, 
  email: {
    type: String,
    required: [true, 'user must have a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'user must have a password'],
    minlength: 8,
    select: false,
  },
  age:{
    type: Number,
    required: [true, 'enter your age']
  },
  adress: {
    type: String,
  },
  role: {
    type: String,
    required: false,
    default: 'client',
    enum: ['admin', 'secretary', 'client'],

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

usersSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

export default usersSchema;
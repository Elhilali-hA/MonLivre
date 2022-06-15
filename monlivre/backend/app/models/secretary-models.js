import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const secretaySchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: [true, 'user must have a password'],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    required: false,
    default: 'secretary',

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

secretaySchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

export default secretaySchema;
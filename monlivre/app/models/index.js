import mongoose from 'mongoose';
import usersShema from './users-models.js';





mongoose
    .connect(process.env.DATABASE_LOCAL)
    .then(() => {
        console.log('connection 👌');
    });

const models = {};


models.users = mongoose.model('Users', usersShema);





export default models;
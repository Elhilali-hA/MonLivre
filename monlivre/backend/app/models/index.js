import mongoose from 'mongoose';
import usersSchema from './users-models.js';
import secretarySchema from './secretary-models.js'
import adminSchema from './admin-models.js'
import bookSchema from './books-models.js'
import clientSchema from './clients-model.js'
import buySchema from './buy-model.js'
import reservationSchema from './reservation.js'
import orderSchema from './order-model.js'
import paymentSchema from './payment-model.js'


mongoose
    .connect(process.env.DB_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    
    .then(() => {
        
        console.log('connection 👌');
        
    })
    .catch ((error) => {
        console.log(`MongoDB error when connecting: ${error}`);
    })

const models = {};


models.users = mongoose.model('user', usersSchema);
models.secretary = mongoose.model('secretary', secretarySchema);
models.admin = mongoose.model('admin', adminSchema);
models.books = mongoose.model('book', bookSchema);
models.clients = mongoose.model('client', clientSchema);
models.buy = mongoose.model('buy', buySchema);
models.reservation = mongoose.model('reservation', reservationSchema);
models.order = mongoose.model('order', orderSchema);
models.payment = mongoose.model('payment', paymentSchema);












export default models;
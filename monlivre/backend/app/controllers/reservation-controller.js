import models from '../../app/models/index.js';
import AppException from '../../app/exceptions/AppException.js';

class ReservationController {

    async getReservation(req, res) {
        try {
            
            const reservation = await models.reservation.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                    reservation,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getReservations(req, res) {
        try {
            const reservations = await models.reservation.find();
            res.status(202).json({
                status: 'success',
                
                    reservations,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createReservation(req, res) {
        try {
            const newOrder = await models.order.create({...req.body, status: 'reserve'});
            const newreservation = await models.reservation.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    order: newOrder,
                    reservation: newreservation,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateReservation(req, res) {
        try {
            const order = await models.order.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );
            const reservation = await models.reservation.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    reservation,
                    order,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async CancelReseravtion(req, res) {
        try {
            const order = await models.order.findByIdAndDelete(req.params.id);
          const reservation = await models.reservation.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        reservation,
                        order
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
        }


}

export default new ReservationController();
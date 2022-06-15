import models from '../../app/models/index.js';
import AppException from '../../app/exceptions/AppException.js';

class OrderController{

    async getOrder(req, res) {
        try {
            
            const order = await models.order.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                    order,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getOrders(req, res) {
        try {
            const orders = await models.order.find();
            res.status(202).json({
                status: 'success',
                   orders,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

  

    async updateOrder(req, res) {
        try {
            const order = await models.order.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    order,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteOrder(req, res) {
        try {
          const order = await models.order.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        order,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
        }

}
export default new OrderController();
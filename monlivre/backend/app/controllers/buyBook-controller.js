import models from '../../app/models/index.js';
import AppException from '../../app/exceptions/AppException.js';

class BuyController {

    async getSell(req, res) {
        try {
            
            const buy = await models.buy.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                    buy,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getSells(req, res) {
        try {
            const buys = await models.buy.find();
            res.status(202).json({
                status: 'success',
                
                    buys,
                
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createSell(req, res) {
        try {
            const newOrder = await models.order.create({...req.body, status: 'reserve'});
            const newbuy = await models.buy.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    order: newOrder,
                    buy: newbuy,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateSell(req, res) {
        try {
            const order = await models.order.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );
            const buy = await models.buy.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    buy,
                    order
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async CancelBuy(req, res) {
        try {
            const order = await models.order.findByIdAndDelete(req.params.id);
    
            res.status(202).json({
                status: 'success',
                data: {
                    order,
                },
            });
          const buy = await models.buy.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        buy,
                        order
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
        }

}

export default new BuyController();
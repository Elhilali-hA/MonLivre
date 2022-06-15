import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class SecretaryController {

    async getsecretary(req, res) {
        
        try {
            const secretary = await models.secretary.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    secretary,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getsecretarys(req, res) {
        try {
            const secretary = await models.secretary.find();
            res.status(202).json({
                status: 'success',
                secretary: secretary
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createsecretary(req, res) {
        try {
            const newsecretary = await models.secretary.create(req.body);
            const user = await models.users.create({...req.body, role: 'secretary' });

            res.status(202).json({
                status: 'success',
                data: {
                    secretary: newsecretary,
                    secretaryInUserTable: user,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updatesecretary(req, res) {

        try {
            const secretary = await models.secretary.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    secretary,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletesecretary(req, res) {
        try {
          const secretary = await models.secretary.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        secretary,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }



}

export default new SecretaryController();
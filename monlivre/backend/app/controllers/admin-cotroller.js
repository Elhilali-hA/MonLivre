import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class AdminController {

    async getAdmin(req, res) {
        
        try {
            const admin = await models.admin.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    admin,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getAdmins(req, res) {
        try {
            const admin = await models.admin.find();
            res.status(202).json({
                status: 'success',
                admin: admin
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createAdmin(req, res) {
        try {
            const newadmin = await models.admin.create(req.body);
            const user = await models.users.create({...req.body, role: 'admin' });

            res.status(202).json({
                status: 'success',
                data: {
                    admin: newadmin,
                    adminInUserTable: user,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateAdmin(req, res) {

        try {
            const admin = await models.admin.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    admin,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteAdmin(req, res) {
        try {
          const admin = await models.admin.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        admin,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }



}

export default new AdminController();
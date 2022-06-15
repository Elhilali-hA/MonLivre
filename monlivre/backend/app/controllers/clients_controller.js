import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class ClientController {

    async getclient(req, res) {
        
        try {
            const client = await models.clients.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                    client,
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getclients(req, res) {
        try {
            const clients = await models.clients.find();
            res.status(202).json({
                status: 'success',
                clients: clients
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createclient(req, res) {
        try {
            const newclients = await models.clients.create(req.body);
            const user = await models.users.create({...req.body, role: 'client' });

            res.status(202).json({
                status: 'success',
                data: {
                    clients: newclients,
                    clientsInUserTable: user,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateclient(req, res) {

        try {
            const clients = await models.clients.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    clients,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteclient(req, res) {
        try {
          const client = await models.clients.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        client,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }



}

export default new ClientController();
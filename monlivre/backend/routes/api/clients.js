import ClientsController from '../../app/controllers/clients_controller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';

export default {
  group: {
    prefix: '/clients',
    middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin');
        }
      ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: ClientsController.getclients,
    },
    {
      method: 'post',
      path: '/',
      handler: ClientsController.createclient,
    },
    {
      method: 'get',
      path: '/:id',
      handler: ClientsController.getclient,
    },
    {
      method: 'put',
      path: '/:id',
      handler: ClientsController.updateclient,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: ClientsController.deleteclient,
    },
   
  ],
};

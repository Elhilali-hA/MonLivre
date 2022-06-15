import SecretaryController from '../../app/controllers/secretary-contoller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';

export default {
  group: {
    prefix: '/secretary',
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
      handler: SecretaryController.getsecretarys,
    },
    {
      method: 'post',
      path: '/',
      handler: SecretaryController.createsecretary,
    },
    {
      method: 'get',
      path: '/:id',
      handler: SecretaryController.getsecretary,
    },
    {
      method: 'put',
      path: '/:id',
      handler: SecretaryController.updatesecretary,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: SecretaryController.deletesecretary,
    },
   
  ],
};

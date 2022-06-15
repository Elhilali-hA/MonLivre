import AdminController from '../../app/controllers/admin-cotroller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';

export default {
  group: {
    prefix: '/admins',
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
      handler: AdminController.getAdmins,
    },
    {
      method: 'post',
      path: '/',
      handler: AdminController.createAdmin,
    },
    {
      method: 'get',
      path: '/:id',
      handler: AdminController.getAdmin,
    },
    {
      method: 'put',
      path: '/:id',
      handler: AdminController.updateAdmin,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: AdminController.deleteAdmin,
    },

  ],
};

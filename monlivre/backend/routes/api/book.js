import BookController from '../../app/controllers/books-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';
import upload from '../../app/middlewares/upload.js';


export default {
  group: {
    prefix: '/books', 
  },

  routes: [
    {
      method: 'get',
      path: '/',
      handler: BookController.getBooks,
    },
    {
      method: 'post',
      path: '/',
      middlewares: [auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'secretary');
        },
        upload.uploads],
      handler: BookController.createBook,
    },
    {
      method: 'get',
      path: '/:id',
      handler: BookController.getBook,
    },
    {
      method: 'put',
      path: '/:id',
      middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'secretary');
        }
      ],
      handler: BookController.updateBook,
    },
    {
      method: 'delete',
      path: '/:id',
      middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'secretary');
        }
      ],
      handler: BookController.deleteBook,
    },

  ],
};

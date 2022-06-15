import OrderController from '../../app/controllers/order-controller.js';
import ReservationControler from '../../app/controllers/reservation-controller.js';
import BuyController from '../../app/controllers/buyBook-controller.js'
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';


export default {
  group: {
    prefix: '/orders',
    middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'secretary');
        }
      ],
  },

  routes: [
    {
      method: 'get',
      path: '/',
      handler: OrderController.getOrders,
    },
    {
      method: 'post',
      path: '/reservation',
      handler: ReservationControler.createReservation,
    },
    {
      method: 'get',
      path: '/reservation',
      handler: ReservationControler.getReservations,
    },
    {
        method: 'post',
        path: '/buy',
        handler: BuyController.createSell,
      },
      {
        method: 'get',
        path: '/buy',
        handler: BuyController.getSells,
      },
    {
      method: 'get',
      path: '/:id',
      handler: OrderController.getOrder,
    },
    {
      method: 'put',
      path: '/reservation/:id',
      handler: ReservationControler.updateReservation,
    },
    {
      method: 'put',
      path: '/buy/:id',
      handler: BuyController.updateSell,
    },
    {
      method: 'delete',
      path: '/reservation/:id',
      handler: ReservationControler.CancelReseravtion,
    },
    {
      method: 'delete',
      path: '/buy/:id',
      handler: BuyController.CancelSell,
    },

  ],
};

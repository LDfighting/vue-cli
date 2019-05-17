
import commodity from '../views/commodity.vue'

export default
   [
    // {
    //   path: '/',
    //   name: 'commodity',
    //   component: commodity
    // },
    // {
    //   path: '/comment',
    //   name: 'comment',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "comment" */ '../views/comment.vue')
    // },
    // {
    //   path: '/business',
    //   name: 'business',
    //   component: () => import(/* webpackChunkName: "business" */ '../views/business.vue')
    // },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "layout" */ '../views/layout.vue'),
      children: [
        {
          path: '',
          name: 'commodity',
          component: () => import(/* webpackChunkName: "commodity" */'../views/commodity.vue'),

        },
        {
          path: 'comment',
          name: 'comment',
          component: () => import(/* webpackChunkName: "comment" */'../views/comment.vue')
        },
        {
          path: 'business',
          name: 'business',
          component: () => import(/* webpackChunkName: "business" */'../views/business.vue')
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */'../views/order.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */'../views/login.vue')
    }
  ]


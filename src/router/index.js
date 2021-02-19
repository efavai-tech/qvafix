import Vue from 'vue'
import VueRouter from 'vue-router'
import Jobs from '../views/Jobs'
import Home from '../views/Home'
import Foro from '../views/Foro'
import MisOrdenes from '../views/account/MisOrdenes'

Vue.use(VueRouter)
const routes = [{
        path: "/misOrdenes",
        component: MisOrdenes,
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
    },
    {
        path: '/foro',
        name: 'Foro',
        component: Foro
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/signup',
        name: 'Signup',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/SignUp.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/Login.vue')
    },
    {
        path: '/confirmCode',
        name: 'ConfirmCode',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/ConfirmCode.vue')
    },
    {
        path: '/reset_password',
        name: 'ResetPassword',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/ResetPassword.vue')
    },
    {
        path: '/forgotPassword',
        name: 'ForgotPassword',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/ForgotPassword.vue')
    },
    {
        path: '/publicPost',
        name: 'PublicPost',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/PublicPost.vue'),
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
    {
        path: '/respuestasForo',
        name: 'RespuestasForo',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/RespuestasForo.vue'),
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/admin/Clientes.vue'),
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
    {
        path: '/ordenes',
        name: 'Ordenes',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/admin/Ordenes.vue'),
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
    {
        path: '/taller',
        name: 'Taller',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Taller.vue')
    },
    {
        path: '/talleres',
        name: 'Talleres',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Talleres.vue'),
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
    {
        path: '/solicitudesEmpleo',
        name: 'SolicitudesEmpleo',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/admin/SolicitudesEmpleo.vue'),
        beforeEnter: (to, from, next) => {
            if (!JSON.parse(localStorage.getItem('login'))) {
                next("Login");
            } else {
                next();
            }
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
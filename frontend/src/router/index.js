import VueRouter from 'vue-router'
import Dashboard from "@/components/Dashboard";
import WorkTime from "@/components/WorkTime";
import Users from "@/components/Users";
import DetailedReport from "@/components/DetailedReport";
import ConsolidatedReport from "@/components/ConsolidatedReport";
import Login from "@/components/Login";
import store from '@/store/index';

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Dashboard,
            meta: {
                requiresAuth: true
            },
            beforeEnter: (to, from, next) => {
                if (!store.getters['isLoggedIn']) {
                    return next({
                        path: '/login'
                    })
                }
                next()
            }
        },
        {
            path: '/worktime',
            component: WorkTime,
            meta: {
                requiresAuth: true
            },
            beforeEnter: (to, from, next) => {
                if (!store.getters['isLoggedIn']) {
                    return next({
                        path: '/login'
                    })
                }
                next()
            }
        },
        {
            path: '/users',
            component: Users,
            meta: {
                requiresAuth: true
            },
            beforeEnter: (to, from, next) => {
                if (!store.getters['isLoggedIn']) {
                    return next({
                        path: '/login'
                    })
                }
                next()
            }
        },
        {
            path: '/detailedreport',
            name: 'detailedReport',
            component: DetailedReport,
            props: true,
            meta: {
                requiresAuth: true
            },
            beforeEnter: (to, from, next) => {
                if (!store.getters['isLoggedIn']) {
                    return next({
                        path: '/login'
                    })
                }
                next()
            }
        },
        {
            path: '/consolidatereport',
            name: 'consolidateReport',
            component: ConsolidatedReport,
            props: true,
            meta: {
                requiresAuth: true
            },
            beforeEnter: (to, from, next) => {
                if (!store.getters['isLoggedIn']) {
                    return next({
                        path: '/login'
                    })
                }
                next()
            }
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
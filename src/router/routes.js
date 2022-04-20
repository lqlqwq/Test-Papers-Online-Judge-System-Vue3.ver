import { createRouter, createWebHashHistory } from 'vue-router'
import { Login } from '@/router/asyncComponents'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export { router }
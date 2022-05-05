import { createRouter, createWebHashHistory } from 'vue-router'
import { Login, Index } from '@/router/asyncComponents'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/login',
            component: Login,
            
        },
        {
            path: '/index',
            component: Index,
            beforeEnter:(to,from,next) => {
                console.log(to,from)
                next()
            }
        }
    ],
})

export { router }
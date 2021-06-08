import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from'../views/Home.vue'
import Hide from '../views/Hide.vue'
import Find from '../views/Find.vue'

Vue.use(VueRouter)

/*const HIDE = () => {
    return imports ('../views/Hide.vue')
}
const FIND = () => {
    return imports ('../views/Find.vue')
}*/


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hide',
        name: 'Hide',
        component: Hide
    },
    {
        path: '/find',
        name: 'Find',
        component: Find
    }
];

const router = new VueRouter({
    routes
});

export default router
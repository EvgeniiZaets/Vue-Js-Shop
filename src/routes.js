import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Cart from "./components/Cart";
import E404 from "./components/E404";
import ItemList from "./components/ItemList";
import ItemCard from "./components/ItemCard";

const routes = [
    {
        path: '',
        redirect: {name: 'items'}
    },
    {
        name: 'items',
        path: '/items',
        component: ItemList,
    },
    {
        path: '/item/:id',
        component: ItemCard
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        path: '*',
        component: E404
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history',
    // scrollBehavior () {
    //     return {  }
    // }
});
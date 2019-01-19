import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push({
                name: item.name,
                description: item.description,
                photo: item.photo
            });
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});
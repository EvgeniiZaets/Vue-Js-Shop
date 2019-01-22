import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart';
import navigation from './modules/navigation';

export const store = new Vuex.Store({
    modules: {
        navigation,
        cart
    },
    strict: process.env.NODE_ENV !== 'production'
});
export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        cart(state) {
            return state.cart;
        }
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
    // actions работают в асинхронном режиме.
    actions: {
        addToCart(store, item) {
            store.commit('addToCart', item);
            // эмулируем асинхронность с помощью задержки.
            // setTimeout(() => {
            //     store.commit('otherMutationName');
            // }, 1000);
        }
    },
}
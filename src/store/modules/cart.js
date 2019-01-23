export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        cart(state) {
            return state.items;
        }
    },
    mutations: {
        add(state, item) {
            if (state.items.indexOf(item) === -1) // если в корзине нет такого элемента.
                state.items.push(item);
        }
    },
    // actions работают в асинхронном режиме.
    actions: {
        add(store, item) {
            store.commit('add', item);
            // эмулируем асинхронность с помощью задержки.
            // setTimeout(() => {
            //     store.commit('otherMutationName');
            // }, 1000);
        }
    },
}
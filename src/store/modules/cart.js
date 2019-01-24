export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items(state) {
            return state.items;
        }
    },
    mutations: {
        add(state, item) {
            if (state.items.indexOf(item) === -1) // если в корзине нет такого элемента.
                state.items.push(item);
        },
        remove(state, item) {
            let pos = state.items.indexOf(item);
            if (pos !== -1)
                state.items.splice(pos, 1);
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
        },
        remove(store, item) {
            store.commit('remove', item);
        }
    },
}
export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        list(state) {
            return state.list;
        }
    },
    mutations: {

    },
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
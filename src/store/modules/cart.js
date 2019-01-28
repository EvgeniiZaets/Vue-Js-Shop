export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
        items(state) {
            return state.items;
        },
    },
    mutations: {
        add(state, item) {
            if (state.items.find(itemFromCart => itemFromCart.item.id === item.item.id) === undefined) { // если в корзине нет товара с таким же id.
                let itemClone = JSON.parse(JSON.stringify(item)); // делаем клон, чтобы убрать реактивность quantity и size.
                state.items.push(itemClone);
            } else { // если в корзине есть товар с таким же id.
                let itemWithSameSize = state.items.find(itemFormCart => itemFormCart.size === item.size);
                if (itemWithSameSize) { // и у него совпал размер - увеличиваем quantity.
                    itemWithSameSize.quantity += item.quantity;
                } else { // иначе добавляем как отдельный товар.
                    let itemClone = JSON.parse(JSON.stringify(item));
                    state.items.push(itemClone)
                }
            }
        },
        remove(state, payload) {
            state.items.splice(payload, 1);
        },
        quantityUp(state, payload) {
            state.items[payload].quantity++;
        },
        quantityDown(state, payload) {
            if (state.items[payload].quantity > 1) {
                state.items[payload].quantity--;
            }
        },
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
        remove(store, payload) {
            store.commit('remove', payload);
        }
    },
}
export default {
    namespaced: true,
    state: {
        breadcrumbs: '',
        menuItems: [
            {
                url: '/items',
                text: 'Featured items'
            },
            {
                url: '/items',
                text: 'Apparel'
            },
            {
                url: '/items',
                text: 'Accessories'
            },
            {
                url: '/items',
                text: 'Special collections'
            },
            {
                url: '/items',
                text: 'All products'
            },
        ]
    },
    getters: {
        breadcrumbs(state) {
            return state.breadcrumbs;
        },
        menuItems(state) {
            return state.menuItems;
        }
    },
    mutations: {
        setBreadcrumbs(state, value) {
            state.breadcrumbs = '> ' + value;
        },
    },
    actions: {

    },
}
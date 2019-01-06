<template>
    <div id="app">
        <App-header :cart="cart"></App-header>
        <App-breadcrumbs></App-breadcrumbs>
        <main class="main">
            <div v-if="items && items.length" class="container">
                <App-item-card :item="items[0]" @addtocart="addToCart(items[0])"></App-item-card>
                <span class="recommended">Recommended Products</span>
                <div class="row catalog-products mt-4">
                    <App-recommended-product v-for="item in items.slice(1)" :photo="item.photo" :key="item.id"></App-recommended-product>
                </div>
            </div>
        </main>
        <App-footer></App-footer>
    </div>
</template>

<script>
    import AppHeader from './components/Header';
    import AppBreadcrumbs from './components/Breadcrumbs';
    import AppItemCard from './components/ItemCard';
    import AppRecommendedProduct from './components/RecommendedProduct';
    import AppFooter from './components/Footer';

    export default {
        components: {
            AppHeader,
            AppBreadcrumbs,
            AppItemCard,
            AppRecommendedProduct,
            AppFooter
        },
        data() {
            return {
                items: [],
                cart: []
            };
        },
        methods: {
            addToCart(item) {
                this.cart.push({
                    name: item.name,
                    description: item.description,
                    photo: item.photo
                });
            }
        },
        mounted() {
            axios
                .get('https://api.myjson.com/bins/10hkrw')
                .then(response => (this.items = response.data.items));
        },
    }
</script>
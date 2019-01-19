<template>
    <div id="app">
        <App-header></App-header>
        <App-breadcrumbs></App-breadcrumbs>
        <main class="main">
            <div v-if="items && items.length" class="container">
                <App-item-card :item="items[0]"></App-item-card>
                <span class="recommended">Recommended Products</span>
                <div class="row mt-4">
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
                items: []
            };
        },
        mounted() {
            axios
                .get('https://api.myjson.com/bins/10hkrw')
                .then(response => (this.items = response.data.items));
        },
    }
</script>

<style>
    @font-face {
        font-family: 'gillsans';
        src: url('./assets/fonts/GillSans.TTF');
    }

    @font-face {
        font-family: 'gillsansbold';
        src: url('./assets/fonts/GillSansStd-Bold.woff');
    }

    @font-face {
        font-family: 'Lato';
        src: url('./assets/fonts/Lato-Light.ttf');
    }

    h1 {
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        font-size: 44px;
        text-transform: uppercase;
    }

    body {
        font-size: 14px;
        font-family: 'gillsans', Helvetica, Arial, sans-serif;
    }

    input[type="text"] {
        font-family: 'Lato', sans-serif;
        border: 1px solid #ccc;
        border-radius: 2px;
    }

    input[type="submit"] {
        color: white;
        border: 0;
        text-shadow: none;
        padding: 2px;
        background-color: #e98997;
    }

    input[type="submit"]:hover {
        background-color: black;
    }

    /* Links */
    a, a:visited { color: black; }
    a:hover, a:focus { color: black; text-decoration: none }

    /* Some responsive stuff */

    @media (min-width: 1200px) {
        .container {
            max-width: 1230px;
        }
    }
</style>

<style scoped>
    .recommended {
        font-size: 30px;
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        padding: 10px;
        line-height: 30px;
    }
</style>
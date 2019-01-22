<template>
    <div v-if="items && items.length" class="container">
        <div class="all-products">All products</div>
        <div class="row mt-4">
            <App-item-preview v-for="item in items.slice(1)" :photo="item.photo" :key="item.id"></App-item-preview>
        </div>
    </div>
</template>

<script>
    import AppItemPreview from './ItemPreview';

    export default {
        components: {
            AppItemPreview,
        },
        data() {
            return {
                items: []
            };
        },
        mounted() {
            this.$store.commit('navigation/setBreadcrumbs', 'All items');
            axios
                .get('https://api.myjson.com/bins/10hkrw')
                .then(response => (this.items = response.data.items));
        },
    }
</script>

<style scoped>
    .all-products {
        font-size: 30px;
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        padding: 2rem 0 0 0;
        line-height: 30px;
    }
</style>
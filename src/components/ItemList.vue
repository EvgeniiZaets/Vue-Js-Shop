<template>
    <div v-if="items && items.length" class="container">
        <div class="all-products">All products</div>
        <div class="row mt-4">
            <App-item-preview v-for="item in items" :itemId="item.id" :photo="item.photo" :key="item.id"></App-item-preview>
        </div>
    </div>
</template>

<script>
    import AppItemPreview from './ItemPreview';
    import {  http} from "../http";

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
            http
                .get('https://api.myjson.com/bins/ma49w')
                .then(response => (this.items = response.data.items))
                .catch(error => console.log(error));
        },
    }
</script>

<style lang="scss" scoped>
    .all-products {
        font-size: 30px;
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        padding: 2rem 0 0 0;
        line-height: 30px;
    }
</style>
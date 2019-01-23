<template>
    <div v-if="items && items.length" class="container">
        <App-item-info :item="currentItem"></App-item-info>
        <span class="recommended">Recommended Products</span>
        <div class="row mt-4">
            <App-item-preview v-for="item in items" :itemId="item.id" :photo="item.photo" :key="item.id"></App-item-preview>
        </div>
    </div>
</template>

<script>
    import AppItemInfo from './ItemInfo';
    import AppItemPreview from './ItemPreview';
    import {http} from "../http";

    export default {
        components: {
            AppItemInfo,
            AppItemPreview,
        },
        data() {
            return {
                items: [],
                currentItem: {}
            };
        },
        mounted() {
            this.$store.commit('navigation/setBreadcrumbs', 'ODF80057');
            http
                .get('https://api.myjson.com/bins/ma49w')
                .then(response => {
                    // получение списка всех товаров.
                    let items = response.data.items;
                    // текущий товар.
                    this.currentItem = items.find(item => item.id === +this.$route.params.id);
                    // исключаем из списка товаров текущий(формируем списко рекомендованных).
                    let currentItemId = this.currentItem.id;
                    this.items = items.filter(function(item) {
                        return item.id !== currentItemId;
                    });
                });
        },
    }
</script>

<style scoped>
    .recommended {
        font-size: 30px;
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        padding: 10px;
        line-height: 30px;
    }
</style>
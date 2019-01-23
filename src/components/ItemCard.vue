<template>
    <div v-if="items && items.length" class="container">
        <App-item-info :item="items[0]"></App-item-info>
        <span class="recommended">Recommended Products</span>
        <div class="row mt-4">
            <App-item-preview v-for="item in items.slice(1)" :photo="item.photo" :key="item.id"></App-item-preview>
        </div>
    </div>
</template>

<script>
    import AppItemInfo from './ItemInfo';
    import AppItemPreview from './ItemPreview';

    export default {
        components: {
            AppItemInfo,
            AppItemPreview,
        },
        data() {
            return {
                items: []
            };
        },
        mounted() {
            this.$store.commit('navigation/setBreadcrumbs', 'ODF80057');
            axios
                .get('https://api.myjson.com/bins/ma49w')
                .then(response => (this.items = response.data.items));
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
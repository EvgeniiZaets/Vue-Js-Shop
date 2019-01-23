<template>
    <div class="col-md-3">
        <router-link :to="'/item/' + itemId">
            <img :src="require('../assets/' + photo)">
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            itemId: Number,
            photo: String,
        },
        // methods: {
        //     selectItem() {
        //         this.$route.push('/item/' + this.itemId);
        //     }
        // }
    }
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }
</style>
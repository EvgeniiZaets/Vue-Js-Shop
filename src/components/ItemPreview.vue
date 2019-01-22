<template>
    <div class="col-md-3">
        <a href="#"><img :src="require('../assets/' + photo)"></a>
    </div>
</template>

<script>
    export default {
        props: {
            photo: String,
        },
    }
</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }
</style>
<template>
    <div class="col-md-3">
        <a href="#"><img :src="photo"></a>
    </div>
</template>

<script>
    export default {
        props: {
            photo: String,
        },
    }
</script>
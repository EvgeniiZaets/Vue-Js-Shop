<template>
    <div class="container">
        <div class="breadcrumbs">
            <a href="#">Odd Future</a> {{ this.breadcrumbs }}
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('navigation', {
                breadcrumbs: 'breadcrumbs'
            }),
        },
    }
</script>
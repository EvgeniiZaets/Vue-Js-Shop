<template>
    <div class="container">
        <div class="breadcrumbs">
            <router-link :to="{name: 'items'}">Odd Future</router-link> {{ this.breadcrumbs }}
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
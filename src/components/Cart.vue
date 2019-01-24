<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <button @click="$emit('closeCart')" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <div v-if="cart.length < 1">
                    <div class="m-4">Cart is empty</div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <input @click="$emit('closeCart')" type="submit" class="ok pull-right" value="Ok">
                        </slot>
                    </div>
                </div>
                <div v-else>
                    <form @submit.prevent="checkout">
                        <div v-for="item in cart" class="row">
                            <div class="col-md-6">
                                <img :src="require('../assets/' + item.photo)" class="photo">
                            </div>
                            <div class="col-md-6">
                                <div class="name">{{ item.name }}</div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <slot name="footer">
                                <input type="submit" class="checkout pull-right" value="Checkout">
                            </slot>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            checkout() {
                console.log('checkout');
            }
        },
        computed: {
            ...mapGetters({
                cart: 'cart/items',
            }),
        },
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 500px;
        margin: 0px auto;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .ok {
        width: 30px;
    }

    .checkout {
        width: 80px;
    }

    .photo {
        width: 200px;
    }

    .name {
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        font-size: 20px;
        text-transform: uppercase;
    }
</style>
<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div v-if="cart.length < 1">
                    <div class="m-4">Cart is empty</div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <input @click="$emit('closeCart')" type="submit" class="button-keep-shopping pull-right" value="Keep Shopping">
                        </slot>
                    </div>
                </div>
                <div v-else>
                    <form @submit.prevent="checkout">
                        <table class="table m-auto">
                            <thead>
                                <tr>
                                    <th scope="col" colspan="2">Items</th>
                                    <th scope="col">QTY</th>
                                    <th scope="col"></th>
                                    <th scope="col">Sizes</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item.id">
                                    <td><img :src="require('../assets/' + item.photo)" class="photo"></td>
                                    <td class="name">{{ item.name }}</td>
                                    <td>1</td>
                                    <td>
                                        <button @click="deleteFromCart(item.id)" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                    <td>S</td>
                                    <td class="price">US${{ item.price }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal-footer">
                            <slot name="footer">
                                <input @click="$emit('closeCart')" type="submit" class="button-keep-shopping pull-right" value="Keep Shopping">
                                <input type="submit" class="button-checkout pull-right" value="Checkout">
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

<style lang="scss" scoped>
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
        width: 800px;
        margin: 0px auto;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header {
        h3 {
            margin-top: 0;
            color: #42b983;
        }
    }

    .button-keep-shopping {
        font-size: 18px;
        width: 125px;
        background-color: grey;
    }

    .button-checkout {
        font-size: 18px;
        width: 85px;
    }

    .photo {
        width: 170px;
    }

    .name {
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        font-size: 20px;
        text-transform: uppercase;
    }

    .price {
        font-size: 18px;
    }

    .table {
        thead {
            tr {
                th {
                    text-transform: uppercase;
                    font-size: 16px;
                }
            }
        }
    }
</style>
<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div v-if="cart.length < 1">
                    <div class="m-4">Cart is empty</div>
                    <div class="modal-footer">
                        <input @click="$emit('closeCart')" type="submit" class="button-keep-shopping pull-right" value="Keep Shopping">
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
                                <tr v-for="(item, i) in cart" :key="`${i}-${item.id}`">
                                    <td><img :src="require('../assets/' + item.item.photo)" class="photo"></td>
                                    <td class="name">{{ item.name }}</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            {{ item.quantity }}
                                            <div class="d-flex flex-column ml-3 mt-1">
                                                <a href="" @click="itemQuantityUp($event, i)"><i class="fas fa-angle-up"></i></a>
                                                <a href="" @click="itemQuantityDown($event, i)"><i class="fas fa-angle-down"></i></a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button @click="deleteFromCart(item.item.id)" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                    <td>{{ item.size }}</td>
                                    <td class="price">US${{ totalPrice(item) }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modal-subtotal">
                            Subtotal <span class="cost">US${{ subtotal }}</span>
                        </div>
                        <div class="modal-footer">
                            <input @click="$emit('closeCart')" type="submit" class="button-keep-shopping pull-right" value="Keep Shopping">
                            <input type="submit" class="button-checkout pull-right" value="Checkout">
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
            },
            totalPrice(item) {
                return item.item.price * item.quantity;
            },
            itemQuantityUp(event, i) {
                event.preventDefault();
                this.$store.commit('cart/quantityUp', i);
            },
            itemQuantityDown(event, i) {
                event.preventDefault();
                this.$store.commit('cart/quantityDown', i);
            }
        },
        computed: {
            ...mapGetters('cart', {
                cart: 'items',
                subtotal: 'totalPrice'
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

    .modal-subtotal {
        text-transform: uppercase;
        font-size: 20px;
        border-top: 1px solid #e9ecef;
        text-align: right;
        padding-top: 1rem;
        .cost {
            margin-left: 2.2rem;
            margin-right: 1rem;
        }
    }

    .modal-footer {
        border-top: none;
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
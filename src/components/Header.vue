<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse row" id="navbarSupportedContent">
                    <div class="col-md-3 search">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="pl-4" type="text" placeholder="Search" aria-label="Search">
                            <input type="submit" value="Go">
                        </form>
                    </div>
                    <div class="col-md-2">
                        <span>New Customer</span>
                        <span class="sign-in">Sign In</span>
                    </div>
                    <div class="col-md-1 offset-md-5">
                        <a href="" @click="toggleCart">My Cart({{ cartCount }})</a>
                        <transition name="modal">
                            <App-cart v-show="showCart" @closeCart="closeCart"></App-cart>
                        </transition>
                    </div>
                    <div class="col-md-1">
                        <a href="" @click="toggleCart" class="checkout">Checkout</a>
                    </div>
                </div>
            </div>
        </nav>

        <header class="header">
            <div class="container">
                <div class="jumbotron text-center">
                    <router-link :to="{name: 'items'}">
                        <img src="../assets/img/logo.png">
                    </router-link>
                    <!--<transition name="fade" enter-active-class="animated tada" appear>-->
                        <!--<h2 v-if="showCredits" style="padding-top: 20px">Made by</h2>-->
                    <!--</transition>-->
                    <!--<transition name="slide" appear>-->
                        <!--<h2 v-if="showCredits">Jeque</h2>-->
                    <!--</transition>-->
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <ul class="nav justify-content-center menu">
                <router-link v-for="(item, index) in menu"
                             :key="index"
                             :to="item.url"
                             tag="li"
                             class="nav-link"
                             active-class="active"
                >
                    <a>{{ item.text }}</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import AppCart from './Cart';

    export default {
        components: {
            AppCart
        },
        data() {
            return {
                showCart: false,
            };
        },
        methods: {
            closeCart() {
                this.showCart = false;
            },
            toggleCart(e) {
                e.preventDefault();
                this.showCart = !this.showCart;
            }
        },
        computed: {
            ...mapGetters('cart', {
                cart: 'items',
            }),
            ...mapGetters('navigation', {
                menu: 'menuItems'
            }),
            cartCount() {
                let count = 0;
                this.cart.forEach((item) => {
                    count += item.quantity;
                });
                return count;
            }
        },
    }
</script>

<style lang="scss" scoped>

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    /** Transition for credits */
    /*.fade-enter {*/
        /*opacity: 0;*/
    /*}*/

    /*.fade-enter-active {*/
        /*!*transition: opacity 0.5s;*!*/
    /*}*/

    /*.fade-leave-active {*/
        /*transition: opacity 0.5s 1s;*/
    /*}*/

    /*.fade-leave-to {*/
        /*opacity: 0;*/
    /*}*/
    /*!* *!*/
    /*.slide-enter {}*/

    /*.slide-enter-active {*/
        /*animation: slideIn 1s cubic-bezier(0,.91,.12,.84);*/
    /*}*/

    /*.slide-leave {}*/

    /*.slide-leave-active {*/
        /*animation: slideOut 1s cubic-bezier(.56,.14,.88,.09);*/
    /*}*/

    /*@keyframes slideIn {*/
        /*0% { transform: translateX(-2000px); }*/
        /*100% { transform: translateX(0px); }*/
    /*}*/

    /*@keyframes slideOut {*/
        /*0% { transform: translateX(0px); }*/
        /*100% { transform: translateX(-2000px); }*/
    /*}*/

    /** End transition credits */

    /** bootstrap class **/
    .container-fluid {
        padding: 0;
    }

    /** bootstrap class **/
    .navbar {
        margin-top: 5px;
    }

    .navbar {
        input[type="submit"] {
            width: 30px;
        }
        .search::before {
            font-family: 'FontAwesome';
            content: "\f002";
            font-size: 14px;
            position: absolute;
            display: block;
            padding-top: 3px;
            margin-left: 5px;
            color: #000000;
        }
        .checkout {
            background-color: #e98997;
            padding: 5px;
            text-transform: uppercase;
        }
        .checkout:hover {
            transition: all 0.3s ease;
            background-color: white;
        }
        .sign-in {
            margin-left: 15px;
        }
    }

    /* Header */
    .header {
        .jumbotron {
            background-color: white;
            margin-bottom: 1rem;
        }
    }

    /* Menu */
    .nav.menu {
        text-transform: uppercase;
        font-size: 16px;
        color: black;
        letter-spacing: 1px;
        border-bottom: 10px solid #000000;
        padding-bottom: 25px;
    }
</style>
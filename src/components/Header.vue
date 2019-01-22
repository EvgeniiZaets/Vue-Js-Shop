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
                        <a href="#" class="">My Cart({{ cart.length }})</a>
                    </div>
                    <div class="col-md-1">
                        <router-link :to="{name: 'cart'}" class="checkout">Checkout</router-link>
                    </div>
                </div>
            </div>
        </nav>

        <header class="header">
            <div class="container">
                <div class="jumbotron text-center">
                    <router-link :to="{name: 'items'}">
                        <img @click="showCredits = !showCredits" src="../assets/img/logo.png">
                    </router-link>
                    <transition name="fade" enter-active-class="animated tada" appear>
                        <h2 v-if="showCredits" style="padding-top: 20px">Made by</h2>
                    </transition>
                    <transition name="slide" appear>
                        <h2 v-if="showCredits">Jeque</h2>
                    </transition>
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <ul class="nav justify-content-center menu">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Featured items</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Apparel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Accessories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Special collections</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">All products</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                showCredits: true
            };
        },
        computed: {
            ...mapGetters([
                'cart'
            ]),
        },
    }
</script>

<style scoped>
    /** Transition for credits */
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        /*transition: opacity 0.5s;*/
    }

    .fade-leave-active {
        transition: opacity 0.5s 1s;
    }

    .fade-leave-to {
        opacity: 0;
    }
    /* */
    .slide-enter {}

    .slide-enter-active {
        animation: slideIn 1s cubic-bezier(0,.91,.12,.84);
    }

    .slide-leave {}

    .slide-leave-active {
        animation: slideOut 1s cubic-bezier(.56,.14,.88,.09);
    }

    @keyframes slideIn {
        0% { transform: translateX(-2000px); }
        100% { transform: translateX(0px); }
    }

    @keyframes slideOut {
        0% { transform: translateX(0px); }
        100% { transform: translateX(-2000px); }
    }

    /** End transition credits */

    /** bootstrap class **/
    .container-fluid {
        padding: 0;
    }

    /** bootstrap class **/
    .navbar {
        margin-top: 5px;
    }

    .navbar input[type="submit"] {
        width: 30px;
    }

    .navbar .search::before
    {
        font-family: 'FontAwesome';
        content: "\f002";
        font-size: 14px;
        position: absolute;
        display: block;
        padding-top: 3px;
        margin-left: 5px;
        color: #000000;
    }

    .navbar .checkout {
        background-color: #e98997;
        padding: 5px;
        text-transform: uppercase;
    }

    .navbar .checkout:hover {
        transition: all 0.3s ease;
        background-color: white;
    }

    .navbar .sign-in {
        margin-left: 15px;
    }

    /* Header */

    .header .jumbotron {
        background-color: white;
        margin-bottom: 1rem;
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
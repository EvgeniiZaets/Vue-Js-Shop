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
                        <a href="#" class="checkout">Checkout</a>
                    </div>
                </div>
            </div>
        </nav>

        <header class="header">
            <div class="container">
                <div class="jumbotron text-center">
                    <img src="img/logo.png">
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
    export default {
        props: {
            cart: {
                type: Array,
                required: true
            },
        },
    }
</script>
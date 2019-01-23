<template>
    <div id="app">
        <App-header></App-header>
        <App-breadcrumbs></App-breadcrumbs>
        <main class="main">
            <transition name="fade" mode="out-in">
                <router-view :key="this.$route.params.id"></router-view>
            </transition>
        </main>
        <App-footer></App-footer>
    </div>
</template>

<script>
    import AppHeader from './components/Header';
    import AppBreadcrumbs from './components/Breadcrumbs';
    import AppFooter from './components/Footer';

    export default {
        components: {
            AppHeader,
            AppBreadcrumbs,
            AppFooter
        },
    }
</script>

<style>
    .main {
        height: 750px;
    }

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity .3s;
    }
    .fade-enter-to {

    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-leave-to {
        opacity: 0
    }

    @font-face {
        font-family: 'gillsans';
        src: url('./assets/fonts/GillSans.TTF');
    }

    @font-face {
        font-family: 'gillsansbold';
        src: url('./assets/fonts/GillSansStd-Bold.woff');
    }

    @font-face {
        font-family: 'Lato';
        src: url('./assets/fonts/Lato-Light.ttf');
    }

    h1 {
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        font-size: 44px;
        text-transform: uppercase;
    }

    body {
        font-size: 14px;
        font-family: 'gillsans', Helvetica, Arial, sans-serif;
    }

    input[type="text"] {
        font-family: 'Lato', sans-serif;
        border: 1px solid #ccc;
        border-radius: 2px;
    }

    input[type="submit"] {
        color: white;
        border: 0;
        text-shadow: none;
        padding: 2px;
        background-color: #e98997;
    }

    input[type="submit"]:hover {
        background-color: black;
    }

    /* Links */
    a, a:visited { color: black; }
    a:hover, a:focus { color: black; text-decoration: none }

    /* Some responsive stuff */

    @media (min-width: 1200px) {
        .container {
            max-width: 1230px;
        }
    }
</style>
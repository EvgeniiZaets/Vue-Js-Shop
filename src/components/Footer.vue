<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4>JOIN OUR MAILING LIST</h4>
                    <p class="mailing-text">For the latest in merchandise specials and promotions, please join this email list.
                        You will only receive offers related to this artist.
                        We never sell or give our mailing lists to anyone.</p>
                </div>
                <div class="col-md-3">
                    <h4>CUSTOMER SERVICE</h4>
                    <ul class="nav flex-column">
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms And Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h4>MY ACCOUNT</h4>
                    <ul class="nav flex-column">
                        <li>
                            <a href="#">Create New Account</a>
                        </li>
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                        <li>
                            <a href="#">Order Status</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mx-auto copyright">© 2018 LIVE NATION MERCHANDISE IS A DIVISION OF <a href="#">LIVE NATION</a></div>
        </div>
    </footer>
</template>

<script>
    export default {}
</script>

<style scoped>
    .footer {
        margin-top: 60px;
        padding-top: 110px;
        background-color: black;
    }

    .footer h4 {
        font-size: 22px;
        font-family: 'gillsansbold', Helvetica, Arial, sans-serif;
        color: #e98997;
    }

    .footer .mailing-text {
        color: white;
    }

    .footer .nav li a {
        color: white;
    }

    .footer .nav li a:hover {
        transition: all 0.3s ease;
        color: #e98997;
    }

    .footer .copyright {
        margin-top: 80px;
        width: 450px;
        color: white;
    }

    .footer .copyright a {
        color: #e98997;
    }
</style>
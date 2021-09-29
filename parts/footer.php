<?php
$class = isset($class) ? $class : '';


?><footer class="footer <?= $class ?>">
    <a class="footer__logo" href="#">
        <?php if ($class) : ?>

            <img src="img/sparmed-logo-light.svg" alt="sparMED GOsafe in IVF Laboratories">
        <?php else : ?>

            <img src="img/sparmed-logo.svg" alt="sparMED GOsafe in IVF Laboratories">
        <?php endif ?>
    </a>
    <ul class="nav-footer">
        <li><a href="./">Privacy policy</a></li>
        <li><a href="./">Legal notice</a></li>
        <li><a href="./">Cookie policy</a></li>
    </ul>
</footer>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
        <!-- <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5> -->
        <!-- <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
    </div>
    <div class="offcanvas-body">

        <nav class="menu">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./about.php">About</a></li>
                <li><a href="">Distributors</a></li>
                <li><a href="./products.php">Products</a></li>
                <li><a href="">News</a></li>
                <li><a href="./#contact">Contacts</a></li>
            </ul>

        </nav>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js" integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js" integrity="sha512-DlTk2PLUinhBupE89kHOJTt11QqbRMQVlbb26XVDvp4D1kt0fRvQJslvZnTelRJHq6yK0tIPCR7cul8+9Blz0g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.min.js"></script> -->
<script src="./dist/app.js?A"></script>
<?php


?>
<!DOCTYPE html>
<html class="no-js">

<head>
    <title>Sparmed.dk</title>
    <?php include('./parts/head-scripts.php'); ?>
</head>

<body class="default-bg">
    <div style="display:none">
        <?php include('./dist/spritemap.svg'); ?>
    </div>


    <div class="main-wrapper">
        <?php include('./parts/main-header.php') ?>


        <section>
            <!-- Slider main container -->
            <div class="default-wrapper top-section">
                <div id="topSwiper" class="swiper-top swiper">
                    <!-- Additional required wrapper -->
                    <div class=" swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="swiper-top__wrapper">
                                <div class="row m-0">
                                    <div class="col col-12 col-md-8 col-text ">
                                        <h1>
                                            Oosafe Filters <br>New MDR regulations
                                        </h1>
                                        <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                                        <a href="" class="btn primary more">More</a>
                                    </div>
                                    <div class="col col-12 col-md-4 col-image">
                                        <img class="top-slide-product" data-parallax data-start="0" data-y="100" data-end="300" src="./img/slide1-product.png" alt="">
                                        <img class="top-slide-sticker" data-parallax data-start="0" data-y="180" data-end="300" src="./img/sticker.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper-top__wrapper">
                                <div class="row m-0">
                                    <div class="col col-12 col-md-8 col-text ">
                                        <h1>
                                            Oosafe Filters <br>New MDR regulations
                                        </h1>
                                        <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                                        <a href="" class="btn primary more">More</a>
                                    </div>
                                    <div class="col col-12 col-md-4 col-image">
                                        <img class="top-slide-product" data-parallax data-start="0" data-y="100" data-end="300" src="./img/slide1-product.png" alt="">
                                        <img class="top-slide-sticker" data-parallax data-start="0" data-y="180" data-end="300" src="./img/sticker.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="swiper-top__wrapper">
                                <div class="row m-0">
                                    <div class="col col-12 col-md-8 col-text ">
                                        <h1>
                                            Oosafe Filters <br>New MDR regulations
                                        </h1>
                                        <p class="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                                        <a href="" class="btn primary more">More</a>
                                    </div>
                                    <div class="col col-12 col-md-4 col-image">
                                        <img class="top-slide-product" data-parallax data-start="0" data-y="100" data-end="300" src="./img/slide1-product.png" alt="">
                                        <img class="top-slide-sticker" data-parallax data-start="0" data-y="180" data-end="300" src="./img/sticker.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- If we need navigation buttons -->
                    <!-- <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> -->

                    <!-- If we need scrollbar -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                </div>
            </div>
        </section>

        <section class="default-wrapper news-container paddings-v">

            <div id="newsSwiper" class="swiper-news swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-top swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">

                        <a href="" class="news">
                            <div class=" news__img">
                                <img src="./img/news1.png" alt="">
                            </div>
                            <div class="news__content">
                                <h2 class="title">Fertilisation IVF & ICSI</h2>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismodaliquam </p>
                                    <span class="more">Read More</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">

                        <a href="" class="news">
                            <div class="news__img">
                                <img src="./img/news2.jpg" alt="">
                            </div>
                            <div class="news__content">
                                <h2 class="title">Fertilisation IVF & ICSI</h2>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismodaliquam </p>
                                    <span class="more">Read More</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                        <a href="" class="news">
                            <div class="news__img">
                                <img src="./img/news3.jpg" alt="">
                            </div>
                            <div class="news__content">
                                <h2 class="title">Fertilisation IVF & ICSI</h2>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismodaliquam </p>
                                    <span class="more">Read More</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <!-- <div class="swiper-button-prev"></div> -->
                <!-- <div class="swiper-button-next"></div> -->

                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
        </section>

        <section class="default-wrapper paddings-v3 post-container">
            <div class="post">
                <div class="post__img">
                    <!-- <img style="display: block;" data-parallax data-start="0" data-y="100" data-end="300" data-start="top center" data-end="+=830px" src="./img/about.jpg" alt=""> -->
                    <img src="./img/about.jpg" alt="">
                </div>
                <div class="post__content">
                    <h3 class="title1">About Us</h2>
                        <h2 class="title2">Meet our Team</h2>

                        <div class="text">
                            <p>Meet our team<br>
                                SparMED is a registered medical device, and more, manufacturer from Denmark with a range of CE marked products. We supply safe products for laboratories and hospitals for various lab procedures, disinfection, research, diagnostics and environment control devices.

                            </p>
                            <span class="more">Read More</span>
                        </div>
                </div>
            </div>
        </section>
        <section class="light-bg overflow-hidden">
            <div class="default-wrapper paddings-v3 pb-0">
                <div class="mb-3 d-flex flex-column flex-lg-row algin-items-end justify-content-between">

                <h2 class="h2">
                    Distributors <br>
                    <span class="marked">All over the World</span>
                </h2>
                <div class="d-flex map-radios">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chEurope" value="Europe">
                        <label class="form-check-label" for="chEurope">
                            Europe
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chMiddleEast" value="MiddleEast">
                        <label class="form-check-label" for="chMiddleEast">
                            Middle East
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chAsiaPacific" value="AsiaPacific">
                        <label class="form-check-label" for="chAsiaPacific">
                            Asia Pacific
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chAfrica" value="Africa">
                        <label class="form-check-label" for="chAfrica">
                            Africa
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chAmericas" value="Americas">
                        <label class="form-check-label" for="chAmericas">
                            Americas
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="region" id="chAustralia" value="Australia">
                        <label class="form-check-label" for="chAustralia">
                            Australia
                        </label>
                    </div>
                </div>
                
                </div>
                <p>Would you like to become one of our distributors and join our world-wide distributor network?
                </p>
                <div class="mt-4">
                    <div class="svg-map__container">
                        <?php include('./parts/svg-map.svg'); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="white-bg">
            <div class="default-wrapper paddings-v3">
            </div>
        </section>
        <section id="contact" class="light-bg contact-container">

            <div class="default-wrapper paddings-v3">
                <div class="d-flex flex-row flex-wrap">
                    <div class="col col-12 col-md-6 contact-form">
                        <h2  class="h2">Contact</h2>
                        <form>
                            <div class="form-floating mb-4">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="text" class="form-control" id="floatingCountry" placeholder="Password">
                                <label for="floatingCountry">Country</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="text" class="form-control" id="floatingSubject" placeholder="Password">
                                <label for="floatingSubject">Message Subject</label>
                            </div>
                            <div class="form-floating mb-4">
                                <textarea type="text" style="height: 10em;" class="form-control" id="floatingMessage" placeholder="Message"></textarea>
                                <label for="floatingMessage">Message</label>
                            </div>
                            <div class="clearfix">
                                <button type="submit" class="btn col-12 col-md-4 primary float-end">Send</button>
                            </div>
                        </form>
                        <p class="disclaimer mt-3">
                            SparMED needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our <a href="#">Privacy Policy</a>.
                        </p>
                    </div>
                    <div class="col col-12 col-md-6 contact-text">
                        <p>
                            <b> SparMED ApS</b><br>
                            <b>CVR</b>: DK-30 89 85 75<br>
                            <b>Address</b>: Ryttermarken 2, 3520 Farum, DENMARK<br>
                        </p>
                        <p>

                            <b>Opening Hours:</b><br>
                            Monday - Thursday 7:30 - 16:00<br>
                            Friday 7:30 - 13:00<br>
                        </p>
                        <p>
                            <b>Phone:</b> (+45) 39 40 25 03<br>
                        </p>
                        <p>
                            <b>General Support:</b> info@sparmed.dk<br>
                            <b>Sales:</b> sales@sparmed.dk<br>
                            <b>Finance:</b> finance@sparmed.dk<br>
                            <b>Marketing:</b> marketing@sparmed.dk<br>
                            <b>Regulatory Affairs:</b> ra@sparmed.dk<br>
                            <b>Legal:</b> legal@sparmed.dk<br>
                            <b>Quality Control:</b> qc@sparmed.dk<br>
                            <b>IT:</b> it@sparmed.dk<br>
                        </p>
                        <p>
                            <b>Bank information:</b><br>
                            Danske Bank A/S<br>
                            Holmens Kanal 2-12, 1092 Copenhagen, Denmark<br>
                        </p>
                        <p>
                            BIC/SWIFT code: DABADKKK<br>
                            EUR Account IBAN: DK86 3000 4779 7776 18<br>
                            USD Account IBAN: DK98 3000 4779 7775 96<br>
                            DKK Account: Regnr.: 3543, Kontonr.: 0011400884<br>
                        </p>
                    </div>
                </div>
            </div>
        </section>






    </div>

    <?php include('./parts/footer.php') ?>

</body>

</html>
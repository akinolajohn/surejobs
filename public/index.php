<!DOCTYPE html>
<html>
<head>
    <!-- Document Character Encoding Metadata -->
    <meta charset="UTF-8">
    <!-- Document http-equiv Compatibility MetaData -->
    <meta content="chrome=1, IE=Edge" http-equiv="X-UA-Compatible">
    <!-- Document Viewport MetaData -->
    <meta content="height=device-height, initial-scale=1.0, maximum-scale=2.0, minimal-ui, minimum-scale=0.1, user-scalable=no, width=device-width" target-densitydpi="92dpi" name="viewport">
    <!-- Miscellaneous Metadata -->
    <meta content="QUINSA | The Lapys Dev Team" name="author">

    <!-- Bootstrap CSS -->
    <link href="assets/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">
    <!-- Base CSS -->
    <link href="assets/css/surejobs.css" media="all" rel="stylesheet" type="text/css">
    <!-- Document CSS -->
    <link href="assets/css/index.css" media="all" rel="stylesheet" type="text/css">

    <!-- Document Title -->
    <title> Sure Jobs </title>

    <!--
        [if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"> </script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"> </script>
        <![endif]
    -->
</head>

<body>
    <main>
        <header id="header">
            <!-- Jumbotron Carousel -->
            <div class="carousel jumbotron slide" id="headerCarousel">
                <!-- Carousel Indicators -->
                <ul class="carousel-indicators">
                    <!-- Slide 1 -->
                    <li data-target="#headerCarousel" data-slide-to="0"> </li>
                    <!-- Slide 2 -->
                    <li data-target="#headerCarousel" data-slide-to="1"> </li>
                    <!-- Slide 3 (Active) -->
                    <li class="active" data-target="#headerCarousel" data-slide-to="2"> </li>
                    <!-- Slide 4 -->
                    <li data-target="#headerCarousel" data-slide-to="3"> </li>
                </ul>

                <!-- Carousel Slides -->
                <div class="carousel-inner">

                    <!-- Slide 1 -->
                    <div class="item">
                        <!-- Slide -->
                        <div class="bg slide-item" style="background-image: url(assets/img/jpg/wall/carpenter0.jpg)"> </div>

                        <!-- Caption -->
                        <div class="carousel-caption">
                            <!-- Headers
                                        --- NOTE ---
                                            The "data-caption" attribute is used to append
                                            pre-set HTML code (the dynamic text and two buttons)
                                            into the page.
                            -->
                            <hgroup data-caption> </hgroup>
                        </div>
                    </div>

                    <!-- Slide 2 -->
                    <div class="item">
                        <!-- Slide -->
                        <div class="bg slide-item" style="background-image: url(assets/img/jpg/wall/carpenter1.jpg)"> </div>

                        <!-- Caption -->
                        <div class="carousel-caption">
                            <!-- Headers -->
                            <hgroup data-caption> </hgroup>
                        </div>
                    </div>

                    <!-- Slide 3 (Active) -->
                    <div class="active item">
                        <!-- Slide -->
                        <div class="bg slide-item" style="background-image: url(assets/img/jpg/wall/mechanic0.jpg)"></div>

                        <!-- Caption -->
                        <div class="carousel-caption">
                            <!-- Headers -->
                            <hgroup data-caption> </hgroup>
                        </div>
                    </div>

                    <!-- Slide 4 -->
                    <div class="item">
                        <!-- Slide -->
                        <div class="bg slide-item" style="background-image: url(assets/img/jpg/wall/plumber0.jpg)"></div>

                        <!-- Caption -->
                        <div class="carousel-caption">
                            <!-- Headers -->
                            <hgroup data-caption> </hgroup>
                        </div>
                    </div>

                </div>

                <!-- Carousel Controls -->
                    <!-- Left Toggle -->
                    <a class="carousel-control left" data-slide="prev" href="#headerCarousel"> <span> &#8592; </span> </a>
                    <!-- Right Toggle -->
                    <a class="carousel-control right" data-slide="next" href="#headerCarousel"> <span> &#8594; </span> </a>
            </div>
        </header>

        <!-- Page Content -->
        <article class="article">
            <!-- Categories -->
            <section class="section" id="categorySection">
                <!-- Carpenter -->
                <div class="category thumbnail">
                    <h1 class="caption"> Carpenter </h1>
                    <div class="bg" style="background-image: url(assets/img/jpg/wall/carpenter2.jpg)"> </div>
                </div>

                <!-- Electrician -->
                <div class="category thumbnail">
                    <h1 class="caption"> Electrician </h1>
                    <div class="bg" style="background-image: url(assets/img/jpg/wall/electrician0.jpg)"> </div>
                </div>

                <!-- Mechanic -->
                <div class="category thumbnail">
                    <h1 class="caption"> Mechanic </h1>
                    <div class="bg" style="background-image: url(assets/img/jpg/wall/mechanic1.jpg)"> </div>
                </div>

                <!-- Plumber -->
                <div class="category thumbnail">
                    <h1 class="caption"> Plumber </h1>
                    <div class="bg" style="background-image: url(assets/img/jpg/wall/plumber1.jpg)"> </div>
                </div>
            </section>
        </article>
    </main>

    <footer id="footerCopy">
        <section class="row">
            <nav style="display: flex">
                <div class="footer-content" id="links">
                    <a> Our Mobile App </a>
                    <a> Social Media </a>
                    <a> Terms of Use </a>
                    <a> Privacy Policy </a>
                </div>

                <div class="footer-content" id="logos">
                    <!-- Facebook -->
                    <!-- <a class="bg" data-title="Check out our Facebook page" id="facebook"
                        href="https://www.facebook.com/Surejobs-437849623238544/"
                        style="background-image: url(assets/img/png/logo/Facebook.png)"
                        target="_blank">
                    </a> -->
                    
                    <!-- Twitter -->
                    <a class="bg" data-inactive data-title="Check out our Twitter page" id="twitter"
                        href=""
                        style="background-image: url(assets/img/png/logo/Twitter.png)"
                        target="_blank">
                    </a>
                    
                    <!-- Instagram -->
                    <a class="bg" data-title="Check out our Instagram page" id="instagram"
                        href="https://www.instagram.com/_surejobs/?hl=en"
                        style="background-image: url(assets/img/png/logo/Instagram.png)"
                        target="_blank">
                    </a>

                    <!-- Google+  -->
                    <a class="bg" data-inactive data-title="Check out our Google+ page" id="googlePlus"
                        href=""
                        style="background-image: url(assets/img/png/logo/Google+.png)"
                        target="_blank">
                    </a>

                    <!-- Google+  -->
                    <a class="bg" data-inactive data-title="Check out our mail" id="googlePlus"
                        href=""
                        style="background-image: url(assets/img/png/logo/mail.png)"
                        target="_blank">
                    </a>
                </div>
            </nav>

            <div class="row">
                <p> &copy; Sure Jobs 2017. </p>
            </div>
        </section>
    </footer>

    <!-- Tether IO Script (Dependency Script) -->
    <script src="assets/js/tether.js" type="text/javascript"> </script>
    <!-- jQuery Script (Sub-Dependency Script) -->
    <script src="assets/js/jquery-3.1.1.min.js" type="text/javascript"> </script>
    <!-- Bootstrap Script -->
    <script src="assets/js/bootstrap.js" type="text/javascript"> </script>
    <!-- Base Script -->
    <script src="assets/js/surejobs.js" type="text/javascript"> </script>
    <!-- Document Script -->
    <script src="assets/js/index.js" type="text/javascript"> </script>
</body>

</html>

module.exports = {
    createPage:function(posts) {
        var HTML = `
<!DOCTYPE HTML>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Orange &mdash; Free Website Template, Free HTML5 Template by FreeHTML5.co</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Free HTML5 Website Template by FreeHTML5.co" />
    <meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
    <meta name="author" content="FreeHTML5.co" />

    <!-- 
    //////////////////////////////////////////////////////

    FREE HTML5 TEMPLATE 
    DESIGNED & DEVELOPED by FreeHTML5.co
        
    Website: 		http://freehtml5.co/
    Email: 			info@freehtml5.co
    Twitter: 		http://twitter.com/fh5co
    Facebook: 		https://www.facebook.com/fh5co

    //////////////////////////////////////////////////////
        -->

        <!-- Facebook and Twitter integration -->
    <meta property="og:title" content=""/>
    <meta property="og:image" content=""/>
    <meta property="og:url" content=""/>
    <meta property="og:site_name" content=""/>
    <meta property="og:description" content=""/>
    <meta name="twitter:title" content="" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:card" content="" />

    <link href='https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet">
    
    <!-- Animate.css -->
    <link rel="stylesheet" href="css/animate.css">
    <!-- Icomoon Icon Fonts-->
    <link rel="stylesheet" href="css/icomoon.css">
    <!-- Bootstrap  -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <!-- Theme style  -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Modernizr JS -->
    <script src="js/modernizr-2.6.2.min.js"></script>
    <!-- FOR IE9 below -->
    <!--[if lt IE 9]>
    <script src="js/respond.min.js"></script>
    <![endif]-->


    </head>
    <body>
        
    <div class="fh5co-loader"></div>
    
    <div id="page">
    <nav class="fh5co-nav" role="navigation">
        <div class="container">
            <div class="row">
                <div class="left-menu text-right menu-1">
                    <ul>
                        <li><a href="about">Despre</a></li>
                        <li class="has-dropdown">
                            <a href="services">Servicii</a>
                        </li>
                    </ul>
                </div>
                <div class="logo text-center">
                    <div id="fh5co-logo"><a href="index">ExvalCont</a></div>
                </div>
                <div class="right-menu text-left menu-1">
                    <ul>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="contact">Contact</a></li>
                        <!-- <li class="btn-cta"><a href="#"><span>Login</span></a></li> -->
                    </ul>
                </div>
            </div>
            
        </div>
    </nav>

    <header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(images/img_bg_2.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 text-center">
                    <div class="display-t">
                        <div class="display-tc animate-box" data-animate-effect="fadeIn">
                            <h1>Expertiza...</h1>
                            <div class="row">
                                <form class="form-inline" id="fh5co-header-subscribe" action="index" enctype="multipart/form-data" method="post">
                                    <div class="col-md-6 col-md-offset-3">
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="email" placeholder="Enter your email" name="email">
                                            <button type="submit" class="btn btn-default">Aboneaza-ta</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div id="fh5co-services" class="fh5co-bg-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="feature-center animate-box" data-animate-effect="fadeIn">
                        <span class="icon">
                            <i class="icon-eye"></i>
                        </span>
                        <h3>Informatii 1</h3>
                        <p>Descriere 1</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-center animate-box" data-animate-effect="fadeIn">
                        <span class="icon">
                            <i class="icon-command"></i>
                        </span>
                        <h3>Informatii 2</h3>
                        <p>Detalii 2</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="feature-center animate-box" data-animate-effect="fadeIn">
                        <span class="icon">
                            <i class="icon-mouse"></i>
                        </span>
                        <h3>Informatii 3</h3>
                        <p>Detalii 3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="fh5co-project">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Proiecte</h2>
                    <p>Lucrari Anterioare</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-1.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Sea</h3>
                        <span>Web Design</span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-2.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Nature</h3>
                        <span>Application</span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-3.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Green Island</h3>
                        <span>Branding</span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-4.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Workspace</h3>
                        <span>Web Design</span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-5.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Nature</h3>
                        <span>Application</span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                    <a href="#"><img src="images/work-6.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
                        <h3>Green Island</h3>
                        <span>Branding</span>
                    </a>
                </div>

            </div>
        </div>
    </div>
    <div id="fh5co-testimonial" style="background-image:url(images/img_bg_1.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Clienti Fericiti</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="box-testimony animate-box">
                        <blockquote>
                            <span class="quote"><span><i class="icon-quote"></i></span></span>
                            <p>&ldquo;Citat 1/Descriere 1&rdquo;</p>
                        </blockquote>
                        <p class="author">X-ulescu, pozitie</p>
                    </div>
                    
                </div>
                <div class="col-md-4">
                    <div class="box-testimony animate-box">
                            <blockquote>
                                    <span class="quote"><span><i class="icon-quote"></i></span></span>
                                    <p>&ldquo;Citat 1/Descriere 1&rdquo;</p>
                                </blockquote>
                                <p class="author">X-ulescu, pozitie</p>
                    </div>
                    
                    
                </div>
                <div class="col-md-4">
                    <div class="box-testimony animate-box">
                            <blockquote>
                                    <span class="quote"><span><i class="icon-quote"></i></span></span>
                                    <p>&ldquo;Citat 1/Descriere 1&rdquo;</p>
                                </blockquote>
                                <p class="author">X-ulescu, pozitie</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div id="fh5co-blog" class="fh5co-bg-section">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Bloguri Recente</h2>
                    <p>Publicatii noi si interesante din domeniu.</p>
                </div>
            </div>
            <div class="row">`;
                
        for (var i = 0; i < Math.min (posts.length, 3); ++ i) {
            HTML += 
                `<div class="col-lg-4 col-md-4">
                    <div class="fh5co-blog animate-box">
                        <a href="/blogpost?id=${posts[i].id}"><img class="img-responsive" src="${posts[i].photopath}" alt=""></a>
                        <div class="blog-text">
                            <h3><a href="/blogpost?id=${posts[i].id}">${posts[i].title}</a></h3>
                            <span class="posted_on">${posts[i].timestamp}</span>
                            <p>${posts[i].body.slice(0, 50)}</p>
                            <a href="/blogpost?id=${posts[i].id}" class="btn btn-primary">Read More</a>
                        </div> 
                    </div>
                </div>`;
        }
            
        HTML += 
            `</div>
        </div>
    </div>


    <div id="fh5co-started">
        <div class="container">
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Hai sa incepem</h2>
                    <p>Cele mai rapide servicii de expertiza</p>
                </div>
            </div>
            <div class="row animate-box">
                <div class="col-md-8 col-md-offset-2">
                    <form class="form-inline">
                        <div class="col-md-6 col-md-offset-3 col-sm-6">
                            <button type="submit" class="btn btn-default btn-block">Contacteaza-ne</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <footer id="fh5co-footer" role="contentinfo">
        <div class="container">
            <div class="row row-pb-md">
                <div class="col-md-2 col-sm-4 col-xs-6">
                    <ul class="fh5co-footer-links">
                        <li><a href="about">Despre</a></li>
                        <li><a href="#">Ajutor</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Termeni si conditii</a></li>
                        <li><a href="#">Intalniri</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12 fh5co-widget col-md-push-1">
                    <h3>Putin despre ExvalCont</h3>
                    <p>Informatii</p>
                    <p><a href="about">Afla mai multe</a></p>
                </div>
            </div>

            <div class="row copyright">
                <div class="col-md-12 text-center">
                    <p>
                        <small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
                        <small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small>
                    </p>
                    <p>
                        <ul class="fh5co-social-icons">
                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-facebook"></i></a></li>
                            <li><a href="#"><i class="icon-linkedin"></i></a></li>
                            <li><a href="#"><i class="icon-dribbble"></i></a></li>
                        </ul>
                    </p>
                </div>
            </div>

        </div>
    </footer>
    </div>

    <div class="gototop js-top">
        <a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
    </div>
    
    <!-- jQuery -->
    <script src="js/jquery.min.js"></script>
    <!-- jQuery Easing -->
    <script src="js/jquery.easing.1.3.js"></script>
    <!-- Bootstrap -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Waypoints -->
    <script src="js/jquery.waypoints.min.js"></script>
    <!-- Main -->
    <script src="js/main.js"></script>

    </body>
</html>
`;
        return HTML;
    }
}
/* Window Load State. 
   Used: Global 
   Info: Basically we gather up all carousels in this state
   */
function inicio_vc() {

    $('body,html').animate({ scrollTop: 0 }, 800);

    $('a[data-rel]').each(function () {
        $(this).attr('rel', $(this).data('rel'));
    });
    $("a[rel^='prettyPhoto']").prettyPhoto({
         theme: 'facebook',
        show_title: false,
        deeplinking: false,
        social_tools: false
    });


    /* Latest Portfolio Carousel Widget.*/
    $(".vc_latest-portfolio .vc_carousel").carouFredSel({
        responsive: true,
        prev: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child');
            }
        },
        next: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child');
            }
        },
        width: '100%',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 2000
        },
        scroll: {
            items: 1,
            duration: 400,
            wipe: true
        },
        items: {
            visible: {
                min: 1,
                max: 3
            },
            width: 480,
            height: 'auto'
        }
    });

    /* Client Carousel Widget.  
       Used: index.html, index-portfolio.html, index-revolution.html, about.html */
    $(".vc_client .vc_carousel").carouFredSel({
        responsive: true,
        prev: {
            button: function () {
                return $(this).parent().parent().parent().children('.met_carousel_control').children('a:first-child');
            }
        },
        next: {
            button: function () {
                return $(this).parent().parent().parent().children('.met_carousel_control').children('a:last-child');
            }
        },
        width: 'auto',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 1000
        },
        items: {
            visible: {
                min: 1,
                max: 6
            },
            height: 152
        },
        pagination: "#vc_client-pager"
    });

    /* Testimonial Carousel Widget.  
       Used: about.html */
    $(".vc_testimonial .vc_carousel").carouFredSel({
        responsive: true,
        width: 'auto',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 1000
        },
        items: {
            visible: 1,
            height: 'auto'
        },
        pagination: "#vc_testimonial-pager"
    });

    /* Sidebar Portfolio Carousel Widget.  
       Used: Every page with sidebar */
    $(".vc_portfolio-widget .vc_carousel").carouFredSel({
        responsive: true,
        prev: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child');
            }
        },
        next: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child');
            }
        },
        width: '100%',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 2000
        },
        items: {
            visible: {
                min: 1,
                max: 2
            },
            width: 480,
            height: 'auto'
        }
    });

    /* Single Portfolio Carousel Widget.  
       Used: portfolio-single-project-full-width.html, portfolio-single-project.html */
    $(".vc_single-portfolio .vc_carousel").carouFredSel({
        responsive: true,
        prev: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child');
            }
        },
        next: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child');
            }
        },
        width: '100%',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 2000
        },
        items: {
            visible: {
                max: 1
            },
            width: 570,
            height: 'auto'
        }
    });

    /* Related Project Carousel Widget.  
       Used: portfolio-single-project-full-width.html, portfolio-single-project.html, blog-single.html */
    $(".vc_related-project .vc_carousel").carouFredSel({
        responsive: true,
        prev: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:first-child');
            }
        },
        next: {
            button: function () {
                return $(this).parent().parent().parent().children('.vc_carousel-control').children('a:last-child');
            }
        },
        width: '100%',
        circular: false,
        infinite: true,
        auto: {
            play: true,
            pauseDuration: 0,
            duration: 2000
        },
        scroll: {
            items: 4,
            duration: 400,
            wipe: true
        },
        items: {
            visible: {
                min: 1,
                max: 4
            },
            width: 277,
            height: 'auto'
        }
    });
}


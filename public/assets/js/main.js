function setmenu(tp) {
    var menu_list = $("#mobile-menu ul li").length;
    for (i = 1; i <= menu_list; i++) {
        if (eval(i) == tp) 
    {
      if(document.getElementsByClassName("menu" + i))
            $(".menu" + i).addClass("active");
        }
    else 
    {
      if(document.getElementsByClassName("menu" + i))
            $(".menu" + i).removeClass("active");
        }
    }
}


(function($) {
    "use strict";
    var windowOn = $(window);
    
    $(document).ready( function() {
        
        
        windowOn.on('load', function () {
            wowAnimation();
          });
          

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });
          

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas_close,.offcanvas_overlay").on("click", function() {
            $(".offcanvas_info").removeClass("info-open");
            $(".offcanvas_overlay").removeClass("overlay-open");
        });
        $(".sidebar_toggle").on("click", function() {
            $(".offcanvas_info").addClass("info-open");
            $(".offcanvas_overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas_area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

       //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
            } else {
            $("#header-sticky").addClass("sticky");
            }
        });
	
        // wow init
		new WOW().init();

          //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function(){
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function(){
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

         //>> Search Bar <<//
        $(".tp-search-toggle").on('click', function(){
            $(".tp-header-search-bar").addClass("tp-search-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });

        $(".tp-search-close,.tp-offcanvas-overlay").on('click', function(){
            $(".tp-header-search-bar").removeClass("tp-search-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });
        
		//>> Back To Top Slider Start <<//
        windowOn.on('scroll',function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        $("#back-top").on("click",function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });
		
		// Popup Video JS 
		$('.video-popup').magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});
        
        //>> jarallax <<//
        if($('.jarallax').length){
            $('.jarallax').jarallax({
            speed: 0.2,
            });
        }
        //>> vanila tilt <<//
        if($('.moving').length){
            $('.moving').tilt({
                glare: true,
                maxGlare: .5,
            })
        } 
		
        //>> Data Background Style<<//
        // data bg img 
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        })
        
        // data bg color
        $("[data-bg-color]").each(function () {
            $(this).css("background-color", $(this).attr("data-bg-color"))
        })

        // data bg color
        $("[data-color]").each(function () {
            $(this).css("color", $(this).attr("data-color"))
        })


        //>> About Brand Slider  <<//
        if($(".about-slider-active").length > 0) {
            const swiper = new Swiper(".about-slider-active", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".efast-swiper-button-next",
                prevEl: ".efast-swiper-button-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                475: {
                    slidesPerView: 2,
                },
                400: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }

        //>> Team Slider <<//
        if($(".team-slider-active").length > 0) {
        const swiper = new Swiper(".team-slider-active", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }

       //>> Testimonial Slider <<//
       if($(".testimonial-initial").length > 0) {
        const swiper = new Swiper(".testimonial-initial", {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".testimonial-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".efast-swiper-button-next",
                prevEl: ".efast-swiper-button-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }

      //>> Hero Slider Home 02 <<//
       if($(".hero-slider-initial").length > 0) {
        const swiper = new Swiper(".hero-slider-initial", {
            slidesPerView: 1,
            spaceBetween: 0,
			//speed: 5000,
			autoplay: false,
            loop: true,
			pagination: false,
            keyboard: {
                enabled: true,
            },
			autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".hero-button-next",
                prevEl: ".hero-button-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }

       //>> service Slider <<//
       if($(".service-initial").length > 0) {
        const swiper = new Swiper(".service-initial", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".testimonial-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".efast-swiper-button-next",
                prevEl: ".efast-swiper-button-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }
        
       //>> Project Slider <<//
       if($(".Project-initial").length > 0) {
        const swiper = new Swiper(".Project-initial", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                1400: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }
       
        //>> Testimonial Slider <<//
       if($(".testimonial-2-initial").length > 0) {
        const swiper = new Swiper(".testimonial-2-initial", {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            navigation: {
                nextEl: ".efast-swiper-button-next",
                prevEl: ".efast-swiper-button-prev",
            },
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }


       //>> service Slider <<//
       if($(".testimonial-3-initial").length > 0) {
        const swiper = new Swiper(".testimonial-3-initial", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: ".testimonial-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".efast-swiper-button-next",
                prevEl: ".efast-swiper-button-prev",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            }); 
        }

        //>> Ui Range Slider  <<//
        if($('.slider-product-sorting').length){
            $( ".slider-product-sorting" ).slider({
            range: true,
            min: 0,
            max: 1000,
            values: [ 300, 680 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
            });
            $( "#amount" ).val( "" + $( ".slider-product-sorting" ).slider( "values", 0 ) +
            " - " + $( ".slider-product-sorting" ).slider( "values", 1 ) );
        }


         //>> Quantity Cart Js Start <<//
         let quantity = 0;
         let price = 0;
         $(".cart-item-quantity-amount, .product-quant").html(quantity);
         $(".total-price, .product-pri").html(price.toFixed(2));
         $(".cart-increment, .cart-incre").on("click", function() {
             if (quantity <= 4) {
                 quantity++;
                 $(".cart-item-quantity-amount, .product-quant").html(quantity);
                 let basePrice = $(".base-price, .base-pri").text();
                 $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
             }
         });
 
         $(".cart-decrement, .cart-decre").on("click", function() {
             if (quantity >= 1) {
                 quantity--;
                 $(".cart-item-quantity-amount, .product-quant").html(quantity);
                 let basePrice = $(".base-price, .base-pri").text();
                 $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
             }
         });
 
         $(".cart-item-remove>a").on("click", function() {
             $(this).closest(".cart-item").hide(300);
         });

        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });

        //>> Hover Active <<//
        var hoverClasses = $(".project-count-wrap, .hover-color, .single-box");
        hoverClasses.on("mouseenter", function() {
                $(hoverClasses).removeClass("active");
                $(this).addClass("active");
            }
        );


        //>> Service Hover Image Show  <<//
        const serviceItems = document.querySelectorAll(".service__content-2, .service__content-1");

        function followImageCursor(event, serviceItems) {
            const contentBox = serviceItems.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            serviceItems.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }
        
        serviceItems.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });

         //>> Cart Plus Minus <<//
         $(function() {
            $("div.quantity").append('<a class="inc qty-button">+</a><a class="dec qty-button">-</a>');
            $(".qty-button").on("click", function() {
                console.log('clicked');
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();

                if ($button.text() == "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find("input").val(newVal);
            });
        });
		
		// set mansory gallery column
    var maingallcolumn = jQuery('#w-bespoke-column');
    if (maingallcolumn.length) {
    var masonry = new Macy({
            container: '#w-bespoke-column',
            trueOrder: false,
            waitForImages: false,
            margin: 0,
            columns: 4,
            breakAt: {
              1200: {
                columns: 4,
              },
              940: {
                columns: 3,
              },
              700: {
                columns: 3,
              },
              400: {
                columns: 2
              }
            }
          });

    } else {
       //nothing happen
    }


    }); // End Document Ready Function

})(jQuery); // End jQuery
//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    "use strict";

    //// PRELOADER TRIGGER
    $(window).on('load', function () {
        $(".loading").animate({
            "top": "-100%"
        }, 700, function () {
            $(this).remove();
        });
    });

    // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    // Change Theme Color On Click
    
    var colorLi = $(".color-option li");

        
    colorLi.click(function () {
        
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
        
    });

    // Typed JS TRIGGER
	$(".home-page .middle-c h3 span").typed({
		strings: ["WEB DEVELOPER", "WEB DESIGNER"],
		loop: true,
		startDelay: 1e3,
		backDelay: 3e3
	});

    // CUSTOM SCROLLBAR JS TRIGGER
    $(window).on("load",function(){
            $(".page-content").mCustomScrollbar({
		    theme:"dark",
		    scrollInertia: 8
		});
    });

    // TABS JS TRIGGER
	$('#navbar a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

    //// PARTICLES TRIGGER
    particlesJS("particles-overl", {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#333"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#333"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#333",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

	// OWL CAROUSEL TRIGGER
	$('.owl-carousel').owlCarousel({
	 	items: 1,
		margin: 0,
		dots: true
	 });

	// FILTRED PORTFOLIO
	$('.filter li a').on("click", function(e){
			e.preventDefault();
			$(this).addClass('active');
			$(this).parent().siblings().find('a').removeClass('active');
	        var filters = $(this).attr('data-filter');
	        $(this).closest('.works').find('.portfolio-caption').removeClass('disable');
	        if (filters !== 'all') {
	        var selected =  $(this).closest('.works').find('.portfolio-caption');
	        for(var i = 0; i < selected.length; i++){
	        if (!selected.eq(i).hasClass(filters)) {
	           	    selected.eq(i).addClass('disable');
				}
	        }
	   }
	});

	// MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
      type:'inline',
      midClick: true
    });

    //// PARSLEY TRIGGER
    $('.contact-forum').parsley();

    //// NAVBAR COLLAPSE
    var rNav = $(".right-nav"),
	hInfo = $(".home .info"),
	home = $(".home"),
	navBtn = $(".slide-nav-btn"),
	navBtnActive = "slide-nav-btn-active",
	nav = $(".sidebar"),
	navActive = "sidebar-active",
	rNavSpan = $(".right-nav ul li i"),
	up = $(".up i"),
	body = $("html, body");
    rNav.css("top", (home.height() - rNav.height()) / 2);
    hInfo.css("top", (home.height() - hInfo.height()) / 2);
    navBtn.on("click", function() {
      $(this).toggleClass(navBtnActive);
      nav.toggleClass(navActive)
    });



});
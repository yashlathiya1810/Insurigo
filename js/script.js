$(document).ready(function () {

  //  bottam to top arrow
  var btn = $('.bottam_to_top_arrow');
  btn.hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 },
      '1000');
  });

  // about counter

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    },150);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }

  // slider services

  $('#our_services_slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  })

  // testimonials_slider
  $("#testimonials_slider").owlCarousel({
    items: 1,
    margin: 20,
    dots: true,
    loop: true,
  });

  // testimonials_bottam_slider
  $("#testimonials_bottam_slider").owlCarousel({
    items: 4,
    margin: 50,
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });
  // pre-loader
  setTimeout(function () {
    $('.pre_loader').fadeOut();
  }, 3000);

  // header sticky
  $(window).scroll(function () {
    var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  // AOS.init();

  // testimonials_bottam_slider_about_page
  $("#testimonials_bottam_slider_about").owlCarousel({
    margin: 100,
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 5,
      }
    }
  });

  // 

  jQuery(document).ready(function () {
    jQuery('.skillbar').each(function (index) {
    var skillBar = jQuery(this);
    new Waypoint({
    element: skillBar[0],
    handler: function () {
    skillBar.skillBars({
    from: 0,
    speed: 2000,
    interval: 100,
    decimals: 0,
    });
    this.destroy();
    },
    offset: 'bottom-in-view',
    });
    skillBar.addClass('waypoint');
    });
    }); 

    // insurance active
    $('.insurance_manu ul li a').click(function(){
      $('.insurance_manu ul li a').removeClass('active')
      $(this).addClass('active');
   });

    // Manu active
    $('.navbar-collapse ul li a').click(function(){
      $('.insurance_manu ul li a').removeClass('active')
      $(this).addClass('active');
   });

   
    // Manu active
    $('.mobile_menu .nav-item a').click(function(){
      $('.mobile_menu .nav-item a').removeClass('active')
      $(this).addClass('active');
   });

});   
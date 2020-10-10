/**
* Template Name: Personal - v2.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


// for header section
document.getElementById('header').addEventListener('swiped-up', function (e) {
  if ($('#homebutton').hasClass('active')) {
    $('#scrollimg').hide()
    document.getElementById('aboutbuttona').click();
  }
});
document.getElementById('header').addEventListener('wheel', function (event) {
  if ($('#homebutton').hasClass('active')) {
    if (checkScrollDirectionIsUp(event)) {
      console.log('UP');
    } else {
      console.log('Down', 'about');
      $('#scrollimg').hide()
      document.getElementById('aboutbuttona').click();
    }
  }
});


// for about section
document.getElementById('about').addEventListener('swiped-up', function (e) {
  if ($('#aboutbutton').hasClass('active')) {
    console.log('UP');
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
      document.getElementById('servicesbuttona').click();
    }
  }
});
document.getElementById('about').addEventListener('swiped-down', function (e) {
  if ($('#aboutbutton').hasClass('active')) {
    console.log('down');
    if ($(window).scrollTop() < 1) {
      $('#scrollimg').show()
      document.getElementById('homebuttona').click();
    }
  }
});
document.getElementById('about').addEventListener('wheel', function (event) {
  if ($('#aboutbutton').hasClass('active')) {
    if (checkScrollDirectionIsUp(event)) {
      if ($(window).scrollTop() < 1) {
        $('#scrollimg').show()
        document.getElementById('homebuttona').click();
      }
    } else {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
        document.getElementById('servicesbuttona').click();=
      }
    }
  }
});


// for services section
document.getElementById('services').addEventListener('swiped-up', function (e) {
  if ($('#servicesbutton').hasClass('active')) {
    console.log('UP');
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
      console.log('ok')
      document.getElementById('projectsbuttona').click();
    }
  }
});
document.getElementById('services').addEventListener('swiped-down', function (e) {
  if ($('#servicesbutton').hasClass('active')) {
    console.log('down');
    if ($(window).scrollTop() < 1) {
      document.getElementById('aboutbuttona').click();
    }
  }
});
document.getElementById('services').addEventListener('wheel', function (event) {
  if ($('#servicesbutton').hasClass('active')) {
    if (checkScrollDirectionIsUp(event)) {
      console.log('UP');
      if ($(window).scrollTop() < 1) {
        document.getElementById('aboutbuttona').click();
      }
    } else {
      console.log('Down');
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
        document.getElementById('projectsbuttona').click();
        console.log('ok')
      }
    }
  }
});


// for projects section
document.getElementById('portfolio').addEventListener('swiped-up', function (e) {
  if ($('#projectsbutton').hasClass('active')) {
    console.log('UP');
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
      console.log('ok')
      document.getElementById('contactbuttona').click();
    }
  }
});
document.getElementById('portfolio').addEventListener('swiped-down', function (e) {
  if ($('#projectsbutton').hasClass('active')) {
    console.log('down');
    if ($(window).scrollTop() < 1) {
      document.getElementById('servicesbuttona').click();
    }
  }
});
document.getElementById('portfolio').addEventListener('wheel', function (event) {
  if ($('#projectsbutton').hasClass('active')) {
    if (checkScrollDirectionIsUp(event)) {
      console.log('UP');
      console.log($(window).scrollTop())
      if ($(window).scrollTop() < 1) {
        document.getElementById('servicesbuttona').click();
      }
    } else {
      console.log('Down');
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
        document.getElementById('contactbuttona').click();
        console.log('ok')
      }
    }
  }
});


document.getElementById('contact').addEventListener('swiped-down', function (e) {
  if ($('#contactbutton').hasClass('active')) {
    console.log('down');
    if ($(window).scrollTop() < 1) {
      document.getElementById('projectsbuttona').click();
    }
  }
});
document.getElementById('contact').addEventListener('wheel', function (event) {
  if ($('#contactbutton').hasClass('active')) {
    if (checkScrollDirectionIsUp(event)) {
      console.log('UP');
      if ($(window).scrollTop() < 1) {
        document.getElementById('projectsbuttona').click();
      }
    } else {
      console.log('Down');
    }
  }
});



// global function
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


!(function ($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function () {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function () {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox({
      'share': false
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
    canvasWrapper.addClass('active');
    $("body").addClass('fix');
  });

  $(".close-action > .btn-menu-close, .off-canvas-overlay").on('click', function() {
    canvasWrapper.removeClass('active');
    $("body").removeClass('fix');
  });

  // Fixed Menu JS
   $(".navigation-btn-menu").on('click', function() {
    $(".header-navigation-fixed, .navigation-btn-menu").toggleClass("show");
  });

  // Sside Menu JS
  var AsideMenuWrap = $(".aside-menu-wrap");
  $(".btn-aside-menu").on('click', function() {
    AsideMenuWrap.addClass('show');
  });
  $(".btn-aside-menu-close").on('click', function() {
    AsideMenuWrap.removeClass('show');
  });

  // Sside Menu JS
  var AsideFormLoginWrap = $(".aside-login-form-wrap.aside-login-form-wrap-one");
  $(".aside-login-form-open").on('click', function() {
    AsideFormLoginWrap.addClass('show');
  });
  $(".aside-login-form-close.aside-login-form-close-one").on('click', function() {
    AsideFormLoginWrap.removeClass('show');
  });
  var AsideFormLoginWrap2 = $(".aside-login-form-wrap.aside-login-form-wrap-two");
  $(".aside-login-form-register-open").on('click', function() {
    AsideFormLoginWrap2.addClass('show');
  });
  $(".aside-login-form-close.aside-login-form-close-two").on('click', function() {
    AsideFormLoginWrap2.removeClass('show');
  });

  // Sticky Header Js
  var headroom = $(".sticky-header");
  headroom.headroom({
    offset: 280,
    tolerance: 5,
    classes: {
      initial: "headroom",
      pinned: "slideDown",
      unpinned: "slideUp",
      notTop: "sticky"
    }
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
    appendTo: '.res-mobile-menu',
    closeOnClick: false,
    removeClasses: true,
    closedSymbol: '<i class="lastudioicon-down-arrow"></i>',
    openedSymbol: '<i class="lastudioicon-up-arrow"></i>'
  });

  // Menu Activeion Js
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
  var hash = window.location.hash.substr(1);
  if((curpage === "" || curpage === "/" || curpage === "admin") && hash === "")
    {
    } else {
      $(".header-navigation-area li").each(function()
    {
      $(this).removeClass("active");
    });
    if(hash != "")
      $(".header-navigation-area li a[href='"+hash+"']").parents("li").addClass("active");
    else
    $(".header-navigation-area li a[href='"+curpage+"']").parents("li").addClass("active");
  }

    // Search Box  JS
    var searchwrapper = $(".search-box-wrapper");
    $(".btn-search-menu").on('click', function() {
        searchwrapper.addClass('show');
        $("#search-input").focus();
    });
    $(".search-close").on('click', function() {
        searchwrapper.removeClass('show');
    });

  // Swiper Slider Js
    var carouselSlider = new Swiper('.default-slider-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 500,
      spaceBetween : 0,
      preloadImages: true,
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 0,
        shadowScale: 0,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
          nextEl: '.default-slider-container .swiper-button-next',
          prevEl: '.default-slider-container .swiper-button-prev',
      },
      pagination: {
        el: '.default-slider-container .swiper-pagination',
        clickable: 'true',
      },
    });
    $(".default-slider-container").hover(
      function() {
        carouselSlider.autoplay.stop();
      },
      function() {
        carouselSlider.autoplay.start();
      }
    );
    

    var carouselSlider2 = new Swiper('.default-slider2-container', {
      slidesPerView : 1,
      slidesPerGroup: 1,
      loop: true,
      speed: 900,
      spaceBetween : 0,
      mousewheel: true,
      autoplay: {
        delay: 20000,
        disableOnInteraction: false
      },
      navigation: {
          nextEl: '.default-slider2-container .swiper-button-next',
          prevEl: '.default-slider2-container .swiper-button-prev',
      },
      keyboard: {
        enabled: true,
      },
    });
    $(".default-slider2-container").hover(function() {
      (this).swiper.autoplay.stop();
    }, function() {
      (this).swiper.autoplay.start();
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.portfolio-slider-container', {
      loop: true,
      preloadImages: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false
      },
      slidesPerGroup: 1,
      speed: 500,
      navigation: {
          nextEl: '.portfolio-slider-container .swiper-button-next',
          prevEl: '.portfolio-slider-container .swiper-button-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView : 2,
          spaceBetween : 30,
        },
        992: {
          slidesPerView : 2,
          spaceBetween : 30,
        },
        768: {
          slidesPerView : 2,
          spaceBetween : 30,
        },
      }
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.brand-logo-slider-container', {
      autoplay: {
        delay: 1500,
      },
      lope: true,
      slidesPerGroup: 1,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 6,
          spaceBetween : 0,
        },
        992: {
          slidesPerView : 4,
          spaceBetween : 0,
        },
        576: {
          slidesPerView : 3,
          spaceBetween : 0,
        },
        480: {
          slidesPerView : 2,
          spaceBetween : 0,
        },
        0: {
          slidesPerView : 2,
          spaceBetween : 0,
        },
      }
    });

  // t Slider Js
    var swiper = new Swiper('.testi-slider-container', {
      autoplay: {
        delay: 3000,
      },
      slidesPerGroup: 1,
      slidesPerView : 1,
      spaceBetween: 30,
      speed: 600,
      pagination: {
        el: '.testi-slider-container .swiper-pagination',
        clickable: 'true',
      },
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.testi-col3-slider-container', {
      autoplay: {
        delay: 4000,
      },
      lope: true,
      slidesPerGroup: 1,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 3,
          spaceBetween : 0,
        },
        992: {
          slidesPerView : 3,
          spaceBetween : 0,
        },
        576: {
          slidesPerView : 2,
          spaceBetween : 0,
        },
        0: {
          slidesPerView : 1,
          spaceBetween : 0,
        },
      }
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.testi-col4-slider-container', {
      autoplay: {
        delay: 4000,
      },
      lope: true,
      slidesPerGroup: 1,
      spaceBetween: 30,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 3,
        },
        768: {
          slidesPerView : 2,
        },
        0: {
          slidesPerView : 1,
        },
      }
    });

  // Projecet Details Slider Js
    var swiper = new Swiper('.projecet-details-thumb-slider', {
      slidesPerGroup: 1,
      slidesPerView : 1,
      lope: true,
      spaceBetween: 30,
      speed: 600,
      navigation: {
          nextEl: '.projecet-details-thumb-slider .swiper-button-next',
          prevEl: '.projecet-details-thumb-slider .swiper-button-prev',
      },
    });

  // Projecet Details Slider Js
    var swiper = new Swiper('.post-gallery-slider', {
      slidesPerGroup: 1,
      slidesPerView : 1,
      lope: true,
      spaceBetween: 0,
      speed: 600,
      navigation: {
          nextEl: '.post-gallery-slider .swiper-button-next',
          prevEl: '.post-gallery-slider .swiper-button-prev',
      },
    });

  // Brand Logo Slider Js
    var swiper = new Swiper('.post-slider-container', {
      autoplay: {
        delay: 4000,
      },
      lope: true,
      spaceBetween: 30,
      slidesPerGroup: 1,
      speed: 500,
      breakpoints: {
        1200: {
          slidesPerView : 3,
        },
        992: {
          slidesPerView : 3,
        },
        768: {
          slidesPerView : 2,
        },
        575: {
          slidesPerView : 1,
        },
      }
    });

  // Fancybox Js
  $('.image-popup').fancybox();
  $('.video-popup').fancybox();

  // Parallax Js
  $('.parallax').jarallax({
      // Element jarallax Parallax
  });

  // Aos Js
  AOS.init({
    duration: 1000,
  });

  // Svg Icon Js 
  var $svgIconBox = $('.svg-icon-style');
  $svgIconBox.each(function() {
  var $this = $(this),
    $svgIcon = $this.find('.svg-icon'),
    $id = $svgIcon.attr('id'),
    $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, { duration: 140, file: $icon });
    $this.on('scroll', function () {
        $vivus.reset().play();
    });
  });

  //Progress Bar JS
  var skillsBar = $(".progress-line-bar");
  skillsBar.appear(function() {
  skillsBar.each(function(index, elem) {
    var elementItem = $(elem),
    skillBarAmount = elementItem.data('percent');
      elementItem.animate({
          width: skillBarAmount
      }, 1500);
      elementItem.closest('.progress-bar-item').find('.percent').text(skillBarAmount);
      elementItem.closest('.progress-bar-item').find('.progress-info').css('width', skillBarAmount);
    });
  });

  // Ajax Contact Form JS
// Ajax Contact Form JS
/**
var form = $('#contact-form');
var formMessages = $('.form-message');

$(form).submit(function(e) {
  e.preventDefault(); // Prevent default form submission
  var formData = form.serialize(); // Serialize the form data

  $.ajax({
    type: 'POST',
    url: form.attr('action'),
    data: formData,
    xhrFields: { withCredentials: false }, // Handle cross-origin scenarios if necessary
    success: function(data, textStatus, jqXHR) {
      if (jqXHR.status === 302) {
        // Check for redirection in the Location header
        var redirectUrl = jqXHR.getResponseHeader('Location');
        if (redirectUrl) {
          // Redirect to the URL specified in the Location header
          window.location.href = redirectUrl;
        } else {
          // Handle successful response without a Location header
          $(formMessages).removeClass('alert alert-danger');
          $(formMessages).addClass('alert alert-success fade show');
          formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
          formMessages.append('Form submitted successfully!');
          // Clear the form
          $('#contact-form input,#contact-form textarea').val('');
        }
      }
    },
    error: function(data) {
      // Handle error case
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger fade show');

      if (data.responseText) {
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(data.responseText);
      } else {
        formMessages.text('Oops! An error occurred and your message could not be sent.');
      }
    }
  });
});
**/


  // Reveal JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight(),
    leftFixedHeader = $(".header-fixed-left"),
    leftFixedHeaderWidth = leftFixedHeader.innerWidth();

  if (windowWidth > 1399 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
        'margin-bottom': footerHeight + 'px'
    });
  }

  if (windowWidth > 1399 && leftFixedHeader.length > 0) {
    $(".footer-area, .search-box-wrapper, .site-wrapper-left-header").css({
        'padding-left': leftFixedHeaderWidth + 'px'
    });
  }

  function scrollToTop() {
    var $scrollUp = $('#scroll-to-top'),
      $lastScrollTop = 0,
      $window = $(window);
      $window.on('scroll', function () {
      var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
          if ($window.scrollTop() > 120) {
            $scrollUp.addClass('show');
          } else {
            $scrollUp.removeClass('show');
          }
        }
        $lastScrollTop = st;
    });
    $scrollUp.on('click', function (evt) {
      $('html, body').animate({scrollTop: 0}, 50);
      evt.preventDefault();
    });
  }
  scrollToTop();
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
   var varWindow = $(window);
   varWindow.on('load', function() {
       stylePreloader();
   
       // Initialize Masonry Grid Js for portfolio items
       $(".portfolio-filter-content").isotope({
           itemSelector: '.col',
           layoutMode: 'masonry'
       });
   
       // Portfolio Filter Js
       const activeId = $(".portfolio-filter-menu li");
   
       // Initially filter by the default filter (magazine)
       $(".portfolio-filter-content").isotope({
           filter: '.magazine' // Set default filter to show "magazine" items
       });
   
       // Filter items on clicking filter menu
       activeId.on('click', function () {
           const $this = $(this),
               filterValue = $this.data('filter');
           
           // Apply the filter to portfolio items
           $(".portfolio-filter-content").isotope({
               filter: filterValue
           });
           
           // Toggle active class on filter menu
           activeId.removeClass('active');
           $this.addClass('active');
       });
   });
   
})(window.jQuery);


$(document).ready(function () {
  // Predefined list of image filenames for each category (without leading periods)
  var categoryImages = {
    "editorial": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", 
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", 
    "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", 
    "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", 
    "38.jpeg", "39.jpeg", "40.jpeg", "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "46.jpeg", 
    "47.jpeg", "48.jpeg", "49.jpeg", "50.jpeg", "51.jpeg", "52.jpeg", "53.jpeg", "54.jpeg", "55.jpeg", 
    "56.jpeg", "57.jpeg", "58.jpeg"
  ],
    'magazine': [
  '1.jpeg', '2.JPEG', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.png', '8.JPG', '9.PNG', '10.JPEG', '11.jpg', '12.jpeg', '13.PNG','14.PNG'
],
'jewellery': [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.PNG", "9.PNG", "10.PNG", "11.PNG", "12.PNG",
    "13.PNG", "14.PNG", "15.PNG", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.PNG", 
    "24.PNG", "25.PNG", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", 
    "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", 
    "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg"
  ],
  "celebrity": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", 
    "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpeg", 
    "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", 
    "32.jpeg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpeg", "41.jpeg", 
    "42.jpeg", "43.jpg", "44.jpg", "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg", "49.jpg", "50.jpg", "51.jpg", 
    "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg", "61.jpg", 
    "62.jpg", "63.jpg", "64.jpg", "65.jpg", "66.jpg", "67.jpg", "68.jpg", "69.jpeg", "70.jpeg"
  ],
  "product": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", 
    "11.jpg", "12.jpg", "13.jpeg", "14.JPEG", "15.JPEG", "16.JPG", "17.JPG", "18.JPG", "19.JPG"
  ]



    // Add other categories as needed
  };

  // Track loaded images for each category
  var loadedImages = {
    'editorial': 6, // Initially, 6 images are loaded by default for 'editorial'
    'magazine': 6,  // Initially, 6 images are loaded by default for 'magazine'
    'jewellery': 6,
    'celebrity' : 6,
    'product' : 6,
  };

  // Function to load more images for a specific category
  function loadMoreImages(category) {
    console.log('Loading images for category:', category); // Debugging log

    // Strip leading period for the category lookup
    const categoryKey = category.startsWith('.') ? category.slice(1) : category;
    const images = categoryImages[categoryKey]; // Get the list of images for the selected category

    if (!images) {
      console.error('No images found for category:', categoryKey);
      return;
    }

    const totalImages = images.length;      // Total number of images for the category
    const chunkSize = 3;                    // Number of images to load at a time

    // Determine the range of images to load
    const startIndex = loadedImages[categoryKey];
    const endIndex = Math.min(startIndex + chunkSize, totalImages);

    // Generate HTML for the new images
    const newImages = [];
for (let i = startIndex; i < endIndex; i++) {
  const imageSrc = `/assets/img/portfolio/${categoryKey}/${images[i]}`;
  newImages.push(`
    <div class="col ${categoryKey}">
      <div class="portfolio-item">
        <div class="inner-content portfolio-hover-style5">
          <div class="portfolio-thumb">
            <img src="${imageSrc}" alt="${categoryKey} image ${i + 1}" class="portfolio-image">
          </div>
        </div>
      </div>
    </div>
  `);
}

// Append new images to the portfolio container
if (newImages.length > 0) {
  const $newElements = $(newImages.join(''));
  $(".portfolio-filter-content").append($newElements);

  // Reinitialize Isotope if needed
  $(".portfolio-filter-content").isotope('appended', $newElements);

  // Trigger Isotope layout after images are appended
  $(".portfolio-filter-content").imagesLoaded(function() {
    $(".portfolio-filter-content").isotope('layout');
  });

  // Update the count of loaded images
  loadedImages[categoryKey] = endIndex;
} else {
  console.log('No more images to load for category:', categoryKey);
}

    
    
  }

  // Initialize Isotope
  $(".portfolio-filter-content").isotope({
    itemSelector: '.col',
    layoutMode: 'fitRows'
  });

  // "Load More" button click event
  $(".portfolio-loadmore a").on('click', function () {
    const activeCategory = document.querySelector('.portfolio-filter-menu.style2 li.active')?.getAttribute('data-filter');
    if (activeCategory) {
      loadMoreImages(activeCategory);
      $(".portfolio-filter-content").isotope('layout');
    } else {
      console.error('No active category selected.');
    }
  });

  // Filter menu click event
  $(".portfolio-filter-menu li").on('click', function () {
    const $this = $(this);
    const filterValue = $this.data('filter');

    // Filter items using Isotope
    $(".portfolio-filter-content").isotope({
      filter: filterValue
    });

    // Update active state
    $(".portfolio-filter-menu li").removeClass('active');
    $this.addClass('active');
  });
});

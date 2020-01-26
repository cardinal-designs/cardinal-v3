$(document).ready(function() {
  
  // Scroll Reveal
  // General
  ScrollReveal().reveal('.header', {delay: 300, origin: 'bottom', distance: '20px', duration: '200'});

  // Hero
  ScrollReveal().reveal('.logo', {delay: 400});
  ScrollReveal().reveal('.hero__bg', {delay: 400});
  ScrollReveal().reveal('.hero__nav', {delay: 400});
  ScrollReveal().reveal('.hero__text p', {delay: 400, origin: 'bottom', distance: '20px', duration: '200'});
  ScrollReveal().reveal('.hero__text h1', {delay: 800, origin: 'bottom', distance: '20px', duration: '200'});

  // What We Do
  ScrollReveal().reveal('.what-we-do__slider', {delay: 600, origin: 'bottom', distance: '20px', duration: '200'});

  // Work
  ScrollReveal().reveal('.work__featured-item', {delay: 500, origin: 'bottom', distance: '20px', duration: '200'});
  ScrollReveal().reveal('.work__more-item', {delay: 500, origin: 'bottom', distance: '20px', duration: '200'});
  
  // About Us
  ScrollReveal().reveal('.about__text', {delay: 600});
  ScrollReveal().reveal('.about__employee--michael', {delay: 400, origin: 'bottom', distance: '20px'});
  ScrollReveal().reveal('.about__employee--natalie', {delay: 500, origin: 'bottom', distance: '20px'});
  ScrollReveal().reveal('.about__employee--stephan', {delay: 600, origin: 'bottom', distance: '20px'});

  // Contact
  ScrollReveal().reveal('.contact__container', {delay: 600, origin: 'bottom', distance: '20px'});

  // Smooth Scroll
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // What we do slider
  $('.js-what-we-do__slider').slick({
    appendArrows: $('.what-we-do__arrows'),
    nextArrow: '<i class="fas fa-angle-right"></i>',
    prevArrow: '<i class="fas fa-angle-left"></i>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

})

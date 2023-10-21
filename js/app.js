$(document).ready(function () {
  // hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  //project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });
});

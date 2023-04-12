function videoSplider() {
  var video_splide = new Splide( '.video-slide', {
    fixedWidth: 140,
    gap: 10,
    rewind : true,
    arrows: false,
    height: 200,
  } );
  video_splide.mount();
}

function testImonalsSplider() {
  var testimonals_splide = new Splide( '.testimonials-slide', {
    gap: 15,
    rewind : true,
    arrows: false,
    height: 306,
    fixedWidth: 303,
    pagination: false,
  } );
  testimonals_splide.mount();
}

function firstSplider() {
  var first_splide = new Splide( '.first-slide', {
    type : 'slide',
    arrows: false,
    height: 420,
    fixedWidth: 320,
    perPage: 4,

    breakpoints: {
      1920: {
        perPage: 4
      },
      1600: {
        perPage: 3
      },
      1280: {
        perPage: 2
      },
      960: {
        perPage: 1
      }
    }
  } );
  first_splide.mount();
}

function attroneysSplider() {
  var attroneys_splide = new Splide( '.attroneys-splide', {
    perPage: 4,
    focus: 0, 
    arrows: false,
    type: 'slide',
    fixedWidth: 374,
    gap: 10,
    height: 590,

    breakpoints: {
      1560: {
        perPage: 4
      },
      1400: {
        perPage: 3
      }
    }
  } );
  attroneys_splide.mount();
}

$('.customers-carousel').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  cssEase: "ease-in-out",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//counters

(function($) {
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};

}(jQuery));

      $("#number1").jQuerySimpleCounter({
        start: 0,
        end: 60000000,
        duration: 3000
      });

      $("#number2").jQuerySimpleCounter({
        start: 0,
        end: 10000,
        duration: 3000
      });

      $("#number3").jQuerySimpleCounter({
        start: 0,
        end: 10000,
        duration: 3000
      });
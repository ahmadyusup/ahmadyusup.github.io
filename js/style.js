/*Loading gif muter*/

jQuery(document).ready(function($) {
  $(window).load(function(){
    var $body = $('body');
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
    $('.bodymuncul').fadeIn(3500);
  });
});
$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('.navbar-header').addClass('fixed');
		} else {
			$('.navbar-header').removeClass('fixed');
		}
	});
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="collapse"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 50
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 49
		}, 500);
	  return false;
	});
});
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Reveal CSS Animations
new WOW().init();

jQuery(function( $ ){

// Back to Top
	var scrollDiv = document.createElement("div");
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() != 0) {
			jQuery("#toTop").fadeIn();
		} else {
			jQuery("#toTop").fadeOut();
		}
	});
	jQuery("#toTop").click(function () {
		jQuery("body,html").animate({
			scrollTop: 0
		},
		800);
	});
  });
  //lightcase
  ;(function ($) {
    $(function () {
      $('a[data-rel^=lightcase]').lightcase();
      $('a[data-rel="lightcase:myCollection:slideshow"]').lightcase({
        showSequenceInfo: false,
        transition: 'scrollHorizontal',
        transitionOpen: 'elastic',
        transitionClose: 'elastic'
      });
      $('a[data-rel="lightcase:myCollection"]').lightcase({showSequenceInfo: false});

      $('#example1').lightcase({transition: 'none'});
      $('#example2').lightcase({transition: 'fade'});
      $('#example3').lightcase({transition: 'elastic'});
      $('#example4').lightcase({transition: 'scrollTop'});
      $('#example5').lightcase({transition: 'scrollLeft'});
      $('#example6').lightcase({transition: 'scrollRight'});
      $('#example7').lightcase({transition: 'scrollBottom'});
      $('a[data-rel="lightcase:scrollHor"]').lightcase({
        showSequenceInfo: false,
        transition: 'scrollHorizontal'
      });
    });
  })(jQuery);
  //berita
  $(document).ready(function () {
      $('#myCarousel').carousel({
          interval: 10000
      })
      $('.fdi-Carousel .item').each(function () {
          var next = $(this).next();
          if (!next.length) {
              next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));

          if (next.next().length > 0) {
              next.next().children(':first-child').clone().appendTo($(this));
          }
          else {
              $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
          }
      });
  });
  function toggle() {

  var ele = document.getElementById("sembunyikan");

  var text = document.getElementById("penampakan");

  if(ele.style.display == "block") {

  ele.style.display = "none";
  text.innerHTML = "Show All";

  }
  else {
  ele.style.display = "block";
  text.innerHTML = "Hide All";
  }
  }

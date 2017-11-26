$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

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

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
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
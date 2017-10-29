$('.page-scroll').on('click', function(e){

// ambil isi href
var href = $(this).attr('href');

//tangkap elemen 
var   elementHref =$(href);

//pindahkan scroll
$('body').animate({
	scrollTop: elementHref.offset().top - 50
}, 1250, 'swing');

e.preventDefault();
});
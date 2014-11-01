$( document ).ready(function() {
	$('.menu-toggle').on('click', function(e){
	  e.preventDefault();
	  $('.camera-menu').toggleClass('open-camera-menu');
	});
});


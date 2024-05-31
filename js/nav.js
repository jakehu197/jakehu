$(function() {

	var offset = 300,
			offset_opacity = 200,
			scroll_top_duration = 400,
			$back_to_top = $('.buttontop-top');

	$(window).scroll(function(){

		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('buttontop-is-visible') : $back_to_top.removeClass('buttontop-is-visible buttontop-fade-out');

		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('buttontop-fade-out');
		}

	});

	$back_to_top.on('click', function(event){

		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
			 }, scroll_top_duration
		);

	});

});

$(function(){
	// Moblie Menue ---------------------
	$('li:first-child').click(function() {
		$(this).parent().toggleClass('slidedown')
	})	

	$('li:first-child').hover(
		function () {
			$('div.burger').css('background-color','#999f3b');
		},
		function () {
			$('div.burger').css('background-color', '#fff')
		}
	);


	// Send button ----------------------
	$('.send').css( 'cursor', 'pointer' );

	$('.send').click(function(){
		alert('Sorry we are not taking messages at this time.');
	})

})

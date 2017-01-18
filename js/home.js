$(function() {
	
	// Moblie Menue ---------------------
	$('li:first-child').click(function() {
		if (!$(this).parent().attr('class')) {
			$(this).parent().attr('class','slidedown')
		}
		else if ($(this).parent().attr('class', 'slidedown')) {
			$(this).parent().removeClass()
		}
	})

	

	$('li:first-child').hover(
		function () {
			$('div.burger').css('background-color','#999f3b');
		},
		function () {
			$('div.burger').css('background-color', '#fff')
		}
	);

	//Read More --------------------------
	$('.story-button').click(function () {
		$(this).addClass('hide');
		$('.less, .story-button-less').removeClass('hide');
	})

	$('.story-button-less').click(function() {
			$('.story-button').removeClass('hide');
			$('.less, .story-button-less').addClass('hide');
	})






})
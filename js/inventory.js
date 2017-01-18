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



	//--------- H1 click display ----------//
	function showList () {
		$(this).siblings(".the-list").toggleClass("hide");
		$(this).siblings(".covers").toggleClass("hide");
		$(this).toggleClass('show-list');
	}

	$('h1').click(showList);


	$('section>h1').css( 'cursor', 'pointer' );
	




})
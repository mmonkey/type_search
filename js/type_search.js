$(window).keypress(function() {

	if( $('*:focus').length === 0 ) {
		if(! $('.search_overlay').hasClass('show') ) {
			$('.search_overlay').addClass('show');
		}
		$('#search').focus();
	}
});

$('.search_overlay').click(function(e) {
	if( $(e.target).is( $(this) ) ) {
		$(this).removeClass('show');
		$('#search').val("");
	}
});

$('.search_toggle').click(function(e) {
	e.preventDefault();
	if(! $('.search_overlay').hasClass('show') ) {
		$('.search_overlay').addClass('show');
	}
	$('#search').focus();
});
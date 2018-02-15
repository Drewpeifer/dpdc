// content hide / show
$('.headers h2').click(function() {
	header = $(this);
	topic = header.attr('class');
	drawer = $('.drawers .' + topic);

	if (header.hasClass('active')) {
		// close current section
		$('h2.active').removeClass('active');
		$('.drawers div.active').removeClass('active').slideUp(100);
	} else {
		// deactivate any open sections
		$('h2.active').removeClass('active');
		$('.drawers div.active').removeClass('active').slideUp(100);
		// make this header and its section active, show section
		header.addClass('active');
		drawer.addClass('active').slideDown(400);
	}
});

$(function() {
	content = $('.content');

	content.height(content.width());
});
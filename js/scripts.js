// content hide / show
$('.content div h2').click(function() {
	header = $(this);
	drawer = header.siblings('.drawer');

	if (header.hasClass('active')) {
		// close current section
		$('h2.active').removeClass('active');
		$('.drawer.active').removeClass('active').slideUp(100);
	} else {
		$('h2.active').removeClass('active');
		$('.drawer.active').removeClass('active').slideUp(100);

		header.addClass('active');
		drawer.addClass('active').slideDown(400);
	}
});
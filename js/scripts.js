// content hide / show
$('.controls ul li').click(function() {
	console.log('binding...');
	var link = $(this),
		topic = link.attr('class'),
		demo = $('.portal .' + topic);

	if (link.hasClass('active')) {
		// deactivate button + demo
		console.dir(topic);
		console.dir(demo);
		link.removeClass('active');
		$('.portal div').removeClass('visible');
		// show default panel
		$('.portal .default').addClass('visible');

	} else {
		// deactivate any open buttons and sections
		$('.active').removeClass('active');
		$('.content .visible').removeClass('visible');
		// make this button and its section active/visible
		link.addClass('active');
		demo.addClass('visible');
	}
});

$(function() {
	console.log('doc ready');
	// content = $('.content');

	// content.height(content.width());
});
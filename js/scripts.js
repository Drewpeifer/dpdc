$(document).ready(function() {
	$('#nav div').hide(),
	$('header p').hide(),
	$('#wrapper').fadeIn(),
	$('#spiral').css({
				transformOrigin: '120px 120px'
			})
			.transition({
				rotate:'720deg'
			}, 20000).stop(),

	$('p.first').fadeIn(6000).fadeOut(2000),
	$('p.second').fadeIn(10000).fadeOut(2000),
	$('p.third').fadeIn(15000).fadeOut(4000);
}),

$('ul li').click(function() {
	var activeTab = $(this).attr('id'),
		activeHypnoText = $('header p.' + activeTab),
		allHypnoText = $('header p');

	if ($(this).hasClass('active')) { // when clicking an already-open tab

		$(this).removeClass('active') // deactivate
			   .children('div').slideUp(), // hide text
		allHypnoText.fadeOut(1000); // hide accompanying hypnoText

	} else {

		$('ul li.active div').slideUp(), // hide any active text
		$('ul li').removeClass('active'), // deactivate any active tabs
		$(this).addClass('active') // activate this tab
			   .children('div').slideDown(), // reveal text
		allHypnoText.hide(), // hide any visible hypnoText
		activeHypnoText.fadeIn(2000); // reveal accompanying hypnoText

	}
});
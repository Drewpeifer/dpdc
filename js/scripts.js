$(document).ready(function() {
	$('#nav div').hide(), // hide subsections
	$('header p').hide(), // hide hypnoText
	$('#wrapper').fadeIn(), // fade everything else in
	$('#spiral').css({
				transformOrigin: '120px 120px' // center transform
			})
			.transition({
				rotate:'360deg' // do one slow spin
			}, 20000).stop(),

	// hynpoText fades in header
	$('p.first').fadeIn(6000).fadeOut(2000),
	$('p.second').fadeIn(10000).fadeOut(2000),
	$('p.third').fadeIn(15000).fadeOut(4000);
}),

// subsection / drawer functionality
$('ul li').click(function() {
	var activeTab = $(this).attr('id'), // clicked tab
		activeHypnoText = $('header p.' + activeTab), // corresponding hypnoText
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
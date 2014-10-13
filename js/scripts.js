$(function() {
	$('#nav li div').hide();
});

// subsection / drawer functionality

$('ul li').click(function() {
	var activeTab = $(this).attr('id'); // clicked tab

	if ($(this).hasClass('active')) {
	// when clicking an already-open tab

		$(this).removeClass('active') // deactivate and hide text
			   .children('div')
			   .slideUp();

	} else {

		$('ul li.active div').slideUp(), // hide any active text
		$('ul li').removeClass('active'), // deactivate any active tabs
		$(this).addClass('active') // activate this tab
			   .children('div').slideDown(); // reveal text

	}
});
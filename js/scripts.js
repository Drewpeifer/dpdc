$(function() {
	$('.articles div').hide();
});

// subsection / drawer functionality

$('ul li').click(function() {
	var activeTab = $(this).attr('id'); // clicked tab

	if ($(this).hasClass('active')) {
	// when clicking an already-open tab

		$(this).removeClass('active'), // deactivate tab
		$('.articles #' + activeTab).slideUp();

	} else {

		$('.articles div').slideUp(), // hide any active text
		$('ul li').removeClass('active'), // deactivate any active tabs
		$(this).addClass('active'), // activate this tab
		$('.articles #' + activeTab).slideDown(); // reveal text

	}
});
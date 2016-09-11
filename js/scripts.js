// navigation
$('.menu ul li').on('click', function() {
	var activeTab = $(this).text();// clicked tab

	if ($(this).hasClass('active')) {
	// when clicking an already-open tab

		//$(this).removeClass('active'),// deactivate tab
		//$('.drawer .' + activeTab).slideUp();// close article

	} else {

		$('.drawer div').slideUp(),// hide any active articles
		$('ul li').removeClass('active'),// deactivate any active tabs
		$(this).addClass('active'),// activate this tab
		$('.drawer .' + activeTab).slideDown();// reveal article
	};
});
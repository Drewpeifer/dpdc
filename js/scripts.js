$(function() {
	$('.articles div').hide();
	
	var bodyW = $('body').width(),
	    bodyH = $('body').height(),
	    lamp = $('.lamp'),
	    wrapper = $('#wrapper');
	
	    wrapper.animate({
	              top:0
	           }, 5000);
	
        lamp.animate({
                top:-.6 * bodyH,
                boxShadow: "0 0 300px 300px #d99058"
            }, 5000);
	
	                    
});

// subsection / drawer functionality

$('ul li').click(function() {
	var activeTab = $(this).attr('id'); // clicked tab

	if ($(this).hasClass('active')) {
	// when clicking an already-open tab

		$(this).removeClass('active'), // deactivate tab
		$('.articles .' + activeTab).slideUp(); // close article

	} else {

		$('.articles div').slideUp(), // hide any active articles
		$('ul li').removeClass('active'), // deactivate any active tabs
		$(this).addClass('active'), // activate this tab
		$('.articles .' + activeTab).slideDown(); // reveal article

	}
});
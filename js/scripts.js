$('ul li p').click(function(e) {
	var $this = $(this);

	if ($this.hasClass('open')) {
		$this.removeClass('open')
			 .siblings('div').slideUp();
	} else {
		console.log($this),
		$this.addClass('open')
			 .siblings('div').slideDown();
	}
}),

$(document).ready(function() {
	$('#nav div').hide(),
	$('#wrapper').fadeIn();
});
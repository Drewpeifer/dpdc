function makeStars() {
	var star = '<div class="star"></div>',
		starField = $('#starfield');

	for (var i = 0; i < 15; i++) {

		randoTop = Math.floor(Math.random() * 100),
		randoLeft = Math.floor(Math.random() * 100),
		colorA = '#fff',// white
		colorB = '#ffffee',// yellow
		colorC = '#ccffff',// blue
		colors = [colorA, colorB, colorC],
		randomColor = colors[Math.floor(Math.random() * colors.length)];

		$(star).appendTo(starField)
			   .css({
					'top': randoTop + '%',
					'left': randoLeft + '%',
					'background': randomColor,
					'-moz-box-shadow':    '0 0 10px 3px ' + randomColor,
					'-webkit-box-shadow': '0 0 10px 3px ' + randomColor,
					'box-shadow':         '0 0 10px 3px ' + randomColor
			   }).attr('data-val', '' + i + '');
	}

	console.log('stars are built')
}


// ready set go
$(function() {
	
	makeStars(), // Build the skies!



	$('button').click(function() {
		$('.star').transition({
			x:'+=1000',
			duration:500000
		})
		.filter(':nth-child(3n)')
		.stop()
		.transition({
			x:'+=1000',
			duration:400000
		})
	})

});
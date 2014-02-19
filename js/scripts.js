$(function() {
	var star = '<div class="star"></div>',
		starField = $('#starfield');

	for (var i = 0; i < 20; i++) {

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
			   }).addClass('' + i + ''),

			   console.log(randomColor);
	}

	$('button').click(function() {
		$('.star').transition({
			width: '+=300',
			duration:3000
		}).transition({
			left:'+=100',
			duration: 3000,
			easing: 'snap'
		});
	});
});
var star = '<div class="new star"></div>',
	allStars = $('.star'),
	starField = $('#starfield'),
	colorA = '#fff',// white
	colorB = '#ffffee',// yellow
	colorC = '#ccffff',// blue
	colors = [colorA, colorB, colorC]
	starCount = 1;

function starCrawl(starField) {
	var position = $('.new.star').offset(),
		starLeft = position.left,
		fieldWidth = $('#starfield').width();

	$('.new.star').removeClass('new')
				  .animate({
			x:((fieldWidth + 100) - starLeft) // 100 is arbitrary
		}, {
			duration:5000,
			easing: 'linear',
			step: function(now) {
				if ((now + starLeft) >= fieldWidth) {
					console.log('its gone now'),
					$(this).stop()
						   .remove(),
					makeOneStar()
				} else {
					// never do anything here
				}
			}
		});
}

function makeOneStar() {

	randoTop = Math.floor(Math.random() * 100),
	randoLeft = Math.floor(Math.random() * 100),
	randomColor = colors[Math.floor(Math.random() * colors.length)];

	$(star).appendTo(starField)
		   .css({
				'top': randoTop + '%',
				'left': 0,
				'background': randomColor,
				'-moz-box-shadow':    '0 0 10px 3px ' + randomColor,
				'-webkit-box-shadow': '0 0 10px 3px ' + randomColor,
				'box-shadow':         '0 0 10px 3px ' + randomColor
		}),
	
	++starCount,
	console.log('star number ' + starCount + ' has been built'),
	starCrawl();
}

function makeManyStars() {

	for (var i = 0; i < 1; i++) {

		randoTop = Math.floor(Math.random() * 100),
		randoLeft = Math.floor(Math.random() * 100),
		randomColor = colors[Math.floor(Math.random() * colors.length)];

		$(star).appendTo(starField)
			   .css({
					'top': randoTop + '%',
					'left': randoLeft + '%',
					'background': randomColor,
					'-moz-box-shadow':    '0 0 10px 3px ' + randomColor,
					'-webkit-box-shadow': '0 0 10px 3px ' + randomColor,
					'box-shadow':         '0 0 10px 3px ' + randomColor
			   }),

		starCrawl();

	}
}

// ready set go
$(function() {
	makeManyStars(); // build stars
});
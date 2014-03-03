var star = '<div class="new star"></div>', // generic baby star
	allStars = $('.star'), // every star
	starField = $('#starfield'), // wrapper of allStars
	colorA = '#fff',// white
	colorB = '#ffffee',// yellow
	colorC = '#ccffff',// blue
	colors = [colorA, colorB, colorC]
	starCount = 1; // for debugging

// starCrawl() sets the newest star created into motion
function starCrawl(starField) {
	var position = $('.new.star').offset(),
		starLeft = position.left,
		fieldWidth = $('#starfield').width();

	$('.new.star').removeClass('new') // star becomes an adult
				  .animate({
			x:(fieldWidth) // move it offscreen
		}, {
			duration:5000,
			easing: 'linear',
			step: function(now) {
				if ((now + starLeft) >= fieldWidth) { // when star goes offscreen
					// console.log('a star has died'),
					$(this).stop() // stop animation
						   .remove(), // implode this star
					makeOneStar() // make a new star
				} else {
					// never do anything here,
					// or your browser may explode
				}
			}
		});
}

// makeOneStar() does exactly what it sounds like,
// creating a new star with a random color and
// vertical position
function makeOneStar() {

	randoTop = Math.floor(Math.random() * 100),
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
	// console.log('star number ' + starCount + ' has been built'),
	starCrawl(); // set this star into motion
}

// makeManyStars() runs on the initial page load, and determines
// the total number of stars on the screen at any time,
// as well as the initial random position and colors of the first stars
function makeManyStars() {

	for (var i = 0; i < 5; i++) { // this line controls star count

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

		starCrawl(); // set each star into motion

	}
}

// When page is loaded, do the following...
$(function() {

	makeManyStars(); // build the first new stars

});
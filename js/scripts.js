var star = '<div class="new star"></div>', // generic baby star
	allStars = $('.star'), // every star
	starField = $('#starfield'), // wrapper of allStars
	colors = [
				'#FFF',// white
				'#FFE697',// yellow
				'#A5D8FF',// blue
				'#FF8D95' // red
			],
	speeds = [5000, 8000, 10000, 15000],
	starCount = 1, // for debugging
	starCap = 5; // limits the number of stars on the screen

// starCrawl() sets the newest star created into motion
// with a random speed
function starCrawl(starField) {
	var position = $('.new.star').offset(),
		starLeft = position.left,
		fieldWidth = $('#starfield').width(),
		randoSpeed = speeds[Math.floor(Math.random() * speeds.length)];

	$('.new.star').removeClass('new') // star becomes an adult
				  .animate({
			x:(fieldWidth) // move it offscreen
		}, {
			duration: randoSpeed,
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
	randoColor = colors[Math.floor(Math.random() * colors.length)];

	$(star).appendTo(starField)
		   .css({
				'top': randoTop + '%',
				'left': 0,
				'background': randoColor,
				'-moz-box-shadow':    '0 0 10px 3px ' + randoColor,
				'-webkit-box-shadow': '0 0 10px 3px ' + randoColor,
				'box-shadow':         '0 0 10px 3px ' + randoColor
		}),
	
	++starCount,
	console.log('starCount is ' + starCount),
	// console.log('star number ' + starCount + ' has been built'),
	starCrawl() // set this star into motion

	// here is where the incremental events are fired off
	if (starCount % 10 == 0) {
		
	} else if (starCount % 5 == 0) {
		
	} else {}
}

// makeManyStars() runs on the initial page load, and determines
// the total number of stars on the screen at any time,
// as well as the initial random position and colors of the first stars
function makeManyStars() {

	for (var i = 0; i < starCap; i++) {

		randoTop = Math.floor(Math.random() * 100),
		randoLeft = Math.floor(Math.random() * 100),
		randoColor = colors[Math.floor(Math.random() * colors.length)];

		$(star).appendTo(starField)
			   .css({
					'top': randoTop + '%',
					'left': randoLeft + '%',
					'background': randoColor,
					'-moz-box-shadow':    '0 0 10px 3px ' + randoColor,
					'-webkit-box-shadow': '0 0 10px 3px ' + randoColor,
					'box-shadow':         '0 0 10px 3px ' + randoColor
			   }),

		starCrawl(); // set each star into motion

	}
}

// When page is loaded, do the following...
$(function() {

	makeManyStars(); // build the first new stars

});
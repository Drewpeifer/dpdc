var star = '<div class="new star"></div>', // generic baby star
	allStars = $('.star'), // every star
	starField = $('#starfield'), // wrapper of allStars
	starCount = 1, // for debugging
	starCap = 5, // limits the number of stars on the screen
	colors = [
				'#FFF',// white
				'#FFE697',// yellow
				'#A5D8FF',// blue
				'#FF8D95' // red
			],
	speeds = [5000, 8000, 10000, 15000];

////////////////////////////////
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
					
							$(this).stop() // stop animation
						   		   .remove(), // implode this star
							console.log('a star has died'),
							makeOneStar() // make a new star
						} else {
							// never do anything here,
							// or your browser may explode
						}
				}
	});
}

////////////////////////////////
// makeOneStar() does exactly what it sounds like,
// creating a new star with a random color and
// vertical position
function makeOneStar() {

	randoTop = Math.floor(Math.random() * 100),
	randoColor = colors[Math.floor(Math.random() * colors.length)],
	randoSpeed = speeds[Math.floor(Math.random() * speeds.length)];

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
	console.log('a star is born, starCount is now ' + starCount)

	// here is where the incremental events are fired off
	if (starCount % 20 == 0) {

	} else if (starCount % 15 == 0) {

	} else if (starCount % 10 == 0) {
		// convert newest star to UFO
		$('.new.star')
			.addClass('ufo')
			.html('<div class="dome"></div>')
			.css({
				'background':'#444',
				'-moz-box-shadow':'none',
				'-webkit-box-shadow':'none',
				'box-shadow':'none'
				}) // needs set dynamically or else star prop wins
			.animate({
			y: +100
		}, {
			queue:false,
			duration:randoSpeed
		})
	} else if (starCount % 4 == 0) {
		$('.new.star').addClass('flare')
	}

	starCrawl(); // set this star into motion

}

////////////////////////////////
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


////////////////////////////////
// When page is loaded, do the following...
$(function() {

	makeManyStars(); // build the first new stars

	$('#stop').click(function() {
		$('.star').stop();
	})

	$('#stretch').click(function() {
		$('.star').animate({
			'width':'100px'
		});
	})

	$('#warp').click(function() {
		$('.star').stop();
	})
});
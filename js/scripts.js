

function makeStars() {
	var star = '<div class="star"></div>',
		starField = $('#starfield');

	for (var i = 0; i < 1; i++) {

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
			   })

	}


	function starCrawl(starField) {
		var stars = $('.star');

		stars.each(function(i,obj) {
			var position = $(this).offset(),
				starLeft = position.left,
				fieldWidth = $('#starfield').width();

			$(this).animate({
					x:((fieldWidth + 100) - starLeft) // 100 is arbitrary
				}, {
					duration:5000,
					step: function(now) {
						if ((now + starLeft) >= fieldWidth) {
							console.log('its gone now'),
							$(this).stop()
								   .remove(),
							makeStars();
						} else {
							// never do anything here
						}
				}
			});


		})


		// set varying speeds increments for stars
		// $('.star').transition({
		// 	x:'+=1000',
		// 	duration:10000
		// })
		// .filter(':nth-child(2n)')
		// .stop()
		// .transition({
		// 	x:'+=1000',
		// 	duration:400000
		// })
		// .filter(':nth-child(3n)')
		// .stop()
		// .transition({
		// 	x:'+=1000',
		// 	duration:300000
		// })
	}


	console.log('star has been built, starting crawl'),
	starCrawl() // set them in motion

}


// ready set go
$(function() {

	makeStars() // build stars

});
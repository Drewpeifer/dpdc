function makeStars() {
	var star = '<div class="star"></div>',
		starField = $('#starfield');

	for (var i = 0; i < 2; i++) {

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

function starCrawl() {
	var stars = $('.star');

	stars.each(function(i,obj) {
		var position = $(this).offset(),
			starLeft = position.left,
			fieldWidth = $('#starfield').width();

		$(this).animate({
			x:((fieldWidth + 6) - starLeft),
			duration:5000,
			easing:'linear'
		}, {
			step: function(starLeft,fieldWidth) {
				if (starLeft >= $('#starfield').width()) {
					console.log('whoa ' + starLeft)
				} else {
					// never do anything here
				}
			}
		})


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


// ready set go
$(function() {

	makeStars(), // build stars
	starCrawl() // set them in motion

});
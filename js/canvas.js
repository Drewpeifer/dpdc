var canvas = document.getElementById('sketch');

if (canvas.getContext) {

    var context = canvas.getContext('2d'),
        helixWidth = $('.canvas').width(); // this is the canvas's wrapper

    function animate() {

        var currentX = helixWidth / 2; // find center

        for (i = 0; i < 10; i += 1) {

            var render = function() {
                var halfW = helixWidth / 2,
                    quartW = halfW / 2,
                    threeQuartW = halfW + quartW,
                    halfH = canvas.height / 2,
                    quartH = halfH / 2,
                    threeQuartH = halfH + quartH;

                    console.log(currentX);
                // draw helix
                context.beginPath();
                context.moveTo(halfW, 0);
                context.bezierCurveTo(halfW, 0, threeQuartW, quartH, halfW, halfH);
                context.bezierCurveTo(halfW, halfH, threeQuartW, threeQuartH, halfW, canvas.height);
                context.lineWidth = 3;
                context.strokeStyle = 'white';
                context.stroke();
                context.moveTo(halfW, 0);
                context.bezierCurveTo(halfW, 0, quartW, quartH, halfW, halfH);
                context.bezierCurveTo(halfW, halfH, quartW, threeQuartH, halfW, canvas.height);
                context.lineWidth = 3;
                context.strokeStyle = 'white';
                context.stroke();
                // make it dance
                currentX += helixWidth;
            
            };

            render();

        }

        render();

    }

    animate();
}

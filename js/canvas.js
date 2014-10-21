var canvas = document.getElementById('sketch');

if (canvas.getContext) {

    var context = canvas.getContext('2d');

    var render = function() {
    
        var halfW = canvas.width / 2,
            quartW = halfW / 2,
            threeQuartW = halfW + quartW,
            halfH = canvas.height / 2,
            quartH = halfH / 2,
            threeQuartH = halfH + quartH;
    
    // draw helix
        context.beginPath();
        context.moveTo(halfW, 0);
        context.bezierCurveTo(halfW, 0, threeQuartW, quartH, halfW, halfH);
        context.bezierCurveTo(halfW, halfH, threeQuartW, threeQuartH, halfW, canvas.height);
        context.moveTo(halfW, 0);
        context.bezierCurveTo(halfW, 0, quartW, quartH, halfW, halfH);
        context.bezierCurveTo(halfW, halfH, quartW, threeQuartH, halfW, canvas.height);
        context.lineWidth = 6;
        context.strokeStyle = '#fff';
        context.stroke();
    // make it dance
        
    };

    render();

}
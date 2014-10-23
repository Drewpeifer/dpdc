var canvas = document.getElementById('sketch');

if (canvas.getContext) {

    var context = canvas.getContext('2d');

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

    // initial variables here
    var W = $('.canvas').width(), // this is the wrapper of the canvas
        H = $('.canvas').height(),
        halfW = W / 2,
        quartW = halfW / 2,
        threeQW = halfW + quartW,
        halfH = H / 2,
        quartH = halfH / 2,
        threeQH = halfH + quartH;

        console.log(W + " / " + H);

    $('canvas').width(W * 8); // make room for 7 more renders
    $('canvas').height(H); // restrain height to wrapper height

    (function animloop(){

        var render = function() {

        // begin custom shape
        context.beginPath();
        context.moveTo(halfW, 0);
        context.bezierCurveTo(halfW, 0, quartW, quartH, halfW, halfH); // top left
        context.bezierCurveTo(halfW, halfH, threeQW, threeQH, halfW, H); // bottom right
        context.bezierCurveTo(halfW, H, quartW, threeQH, halfW, halfH); // bottom left
        context.bezierCurveTo(halfW, halfH, threeQW, quartH, halfW, 0); // top right

        // complete custom shape
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = '#8ED6FF';
        //context.fill();
        context.strokeStyle = '#fff';
        context.stroke();

        }

        requestAnimFrame(animloop);
        render();
    })();
        // place the rAF *before* the render() to assure as close to
        // 60fps with the setTimeout fallback.

}

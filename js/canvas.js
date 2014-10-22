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

    var x = 100;

    (function animloop(){

        var render = function() {

            context.moveTo(x, 0);
            context.lineTo(x, x);
            context.strokeStyle = '#fff';
            context.lineWidth = 10;
            context.stroke();

        }

        if (x <= 400) {
            x += 20;
        } else {
            // do nothing
        }

        requestAnimFrame(animloop);
        render();
    })();
        // place the rAF *before* the render() to assure as close to
        // 60fps with the setTimeout fallback.

}

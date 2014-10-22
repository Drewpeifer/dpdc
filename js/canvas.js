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

    (function animloop(){

        var render = function() {

            //draw here

        }

        // mod loop here

        requestAnimFrame(animloop);
        render();
    })();
        // place the rAF *before* the render() to assure as close to
        // 60fps with the setTimeout fallback.

}

var widthJs = 1024;


  
// Parallax mouse
$.fn.parallax = function (resistance, mouse){
    $el = $(this);
    TweenLite.to($el, 0.2,
    {
        x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
        y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
    });
};
  
animations();
$( window ).resize(function() {
    animations();
});

function animations(){

    $('body').on('mousemove', function(e) {

        if($(window).width() > widthJs){

            var $this = $('.player-card');

            var x = (event.clientX/$(window).width())-0.5;
            var y = (event.clientY/$(window).height())-0.5;

            TweenLite.to($this, 0.6, {
                rotationY: 10*x,
                rotationX: 5*y,
                ease: Power1.easeOut,
                transformPerspective: 500,
                transformOrigin: "center"
            });

        }

    });

    // if($(window).width() < widthJs){
    // 	$('.box-site').css('transform', 'none');
    // }
}
  
  

$(document).mousemove( function(e) {
    // $('.player-card').parallax(50 , e);
      // $('h1, p').parallax(100 , e);
      // $('img').parallax(150 , e);
    
      $('[data-parallax]').parallax(70 , e);
});
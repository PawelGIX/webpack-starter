
var $window = $(window);
var $header = null;

export function stickHeaderInit({
    header = '.header'
}){

    $header = $(header);
    var run = e => {
        const sct = $window.scrollTop();
        if (sct > 120) {
            $header.addClass("sticky");
        }else if(sct<10){
            $header.removeClass("sticky");
        }
    }
    run();
    

    $window.on('scroll', run);
}

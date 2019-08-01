
var $window = $(window);
var $header = null;

export function stickHeaderInit({
    header = '.header'
}){

    $header = $(header);

    $window.on('scroll', e => {
        if ($window.scrollTop() > 1){  
            $header.addClass("sticky");
        }
        else{
            $header.removeClass("sticky");
        }
    });
}

function minmax(v, min, max) {
    if (v > max) {
        return max;
    } else if (v < min) {
        return min;
    }
    return v;
}



var diffX = 0;
var currentDiff = 0;
var $box;
var $mask;

export function runAnimation({containerClass, maskClass}){
    $box = $(containerClass);
    $mask = $(maskClass);

    $box.on('mousemove', (e) => {

        // if( e.target !== $box[0] ){
        //     console.log('wrong node');
        //     return ;
        // }

        var width = $box.width();
        var x = e.offsetX;

        // console.log(e.currentTarget.offsetX);
        // debugger;
        // console.log({
        //     target: e.terget,
        //     offsetX: e.offsetX,
        //     width 
        // });
        var percent = x / width;
        diffX = -0.1 + percent / 3.7;
        if( diffX > 0.95 ){
            diffX = 0.95;
        }
        var y = 0;
        // console.log({
        //     e,
        //     x,
        //     y,
        //     percent,
        //     cw: $box.width()
        // });

        var x = minmax(x, 0, $box.width());


    });

 

    window.requestAnimationFrame(draw);

}

function draw() {
    var distance = diffX - currentDiff;
    var to = currentDiff + distance / 10;
    // console.log({to, diffX, currentDiff});
    // $mask.css({

    //     transform: `translate(${to*100}%,0)`
    // });


    $mask.attr({
        x: to * 1000
    });

    currentDiff = to;

    window.requestAnimationFrame(draw);
}

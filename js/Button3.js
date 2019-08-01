
// Initial state
// adding scroll event

document.addEventListener('DOMContentLoaded', e=> {
    
    var scrollPos = window.scrollY;
    
    var button = document.querySelector('.ar-widget-button-3');
    // var window = document.querySelector('.page-preview');
    if( button ){
        window.addEventListener('scroll', function(){
            
          // detects new state and compares it with the new one
          if (window.scrollY < scrollPos){
    
              button.setAttribute('data-scroll-direction', 'UP');
          }else if(window.scrollY > scrollPos){
    
            //   button.classList.add('');
              button.setAttribute('data-scroll-direction', 'DOWN');
            }
            // saves the new position for iteration.
            scrollPos = window.scrollY;
        });
    }

});


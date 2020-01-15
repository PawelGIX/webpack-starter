
import {
    TweenMax, TimelineMax,
    Elastic, Power3, Power4, Power0
} from 'gsap';
import ScrollMagic from 'scrollmagic';
import '../gsap/MorphSVGPlugin.min';
import 'animation.gsap';
import 'debug.addIndicators';
import { random } from '../utils/Array';

var controller = new ScrollMagic.Controller();

var explosionAnimation = new TimelineMax();
var _all = document.querySelectorAll('.section-explosion__img .wrap');
TweenMax.set(_all,{ visibility: 'visible' });
explosionAnimation.staggerFrom(_all,.5,{ transformOrigin:'50% 90%', scale:.1, ease: Power4.easeOut },.1);


// const myImgs = document.querySelector('.section-explosion h1').parentNode;
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         console.log(entry.intersectionRatio);
        
//         if (entry.intersectionRatio > 0.7) {
//             explosionAnimation.play();
//             console.log('enter');
//         } else {
//             explosionAnimation.reverse();
//             console.log('leave');
//         }
//     });
// },{ 
//     threshold:  [0, 0.25, 0.5, 0.75, 1],
// });

// observer.observe(myImgs);
   
    




new ScrollMagic.Scene({triggerElement: ".section-explosion", triggerHook: 1})
                .setTween(explosionAnimation)
                // .addIndicators()
                .addTo(controller);

                



// // build scenes
new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".hash", {y: "-55%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".camera", {y: "-55%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".letter", {y: "-35%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".megafon", {y: "-30%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".aparat", {y: "-25%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".at", {y: "-20%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-explosion", duration: "100%", triggerHook:0})
                .setTween(".laptop", {y: "-10%",  ease: Power0.easeNone})
                // .addIndicators()
                .addTo(controller);
                
                
                
// features list

var tween = TweenMax.staggerFrom('.section-features__list > .section-features__list-item, .section-features .button', .4, { y:'+20px', opacity:0, scale:.8, ease: Power4.easeOut },.1);
new ScrollMagic.Scene({triggerElement: ".section-features__list", triggerHook:.6})
                .setTween(tween)
                // .addIndicators()
                .addTo(controller);


// socialmedia cloud

const sm = document.querySelector('.section-with-expandedphoto__photo-cell--social');
var bubbleAnimation = new TimelineMax({ yoyo:false, repeat:-1, repeatDelay:3 });
var bubbleAnimationBloobs = new TimelineMax({ yoyo:true, repeat:-1, ease: Power0.easeNone });
var _photos = document.querySelectorAll('#photo-socialmedia circle');
var _tips = document.querySelectorAll('#photo-socialmedia [data-name="tip"]');
var _blobs = document.querySelectorAll('#photo-socialmedia [data-name="blob"]');
var _d = Array.from(_blobs).map(b=>b.getAttribute('d'));

const shapes = [
    `M112.6,-100.6C137.6,-58.4,143.9,-12.1,137.6,37.8C131.3,87.7,112.5,141.2,66.4,179.3C20.2,217.4,-53.2,240.3,-108.8,216.9C-164.4,193.6,-202.1,124.2,-211,56.4C-219.8,-11.3,-199.8,-77.4,-159.9,-123C-119.9,-168.6,-59.9,-193.8,-8.1,-187.4C43.8,-180.9,87.6,-142.8,112.6,-100.6Z`,
    `M191.5,-133.1C238.2,-94.3,259,-15.2,235.5,40.1C212,95.4,144.2,127,79.8,153.1C15.5,179.3,-45.4,200,-87.7,180.3C-130,160.7,-153.7,100.6,-163.4,42C-173,-16.6,-168.6,-73.8,-139,-108.7C-109.5,-143.6,-54.7,-156.3,8.9,-163.4C72.4,-170.4,144.9,-171.9,191.5,-133.1Z`,
    `M188.2,-149.9C223.1,-106.3,216.4,-29.2,190.3,26.9C164.3,82.9,119,118.1,63.4,153C7.8,188,-58.1,222.8,-112.8,207C-167.5,191.1,-211,124.6,-220,58C-229.1,-8.7,-203.7,-75.4,-161.2,-120.8C-118.8,-166.1,-59.4,-190.1,8.6,-196.9C76.6,-203.8,153.2,-193.5,188.2,-149.9Z`,
];

bubbleAnimation.staggerFrom(_photos,.5,{ transformOrigin:'50% 90%', scale:0, opacity:0,  ease: Power4.easeOut },.2, 0);
bubbleAnimation.staggerFrom(_tips,1,{ transformOrigin:'50% 90%', scale:0, opacity:0,  ease: Elastic.easeInOut },.5, 1);
function process(b){
    var rb = random(shapes);
    var rb2 = random(shapes);
    var time = Math.random() * 4 + 5;
    var anim = new TimelineMax({ yoyo:true, repeat:-1, ease: Power0.easeNone, });
    anim.to(b, time, { x: 100, y: 100, ease: Power0.easeNone, morphSVG: rb, scale:0.6,  });
    anim.to(b, time, { x: 100, y: 100, ease: Power0.easeNone, morphSVG: rb2, scale:0.6,  });
    bubbleAnimationBloobs.add(anim, 0);
    // bubbleAnimationBloobs.to(b, 6, { yoyo:true, ease: Power0.easeNone, morphSVG: rb, scale:0.6,  },'-=3');
}
_blobs.forEach(process);
// _blobs.forEach(process);
// _blobs.forEach(process);
bubbleAnimation.play();
bubbleAnimationBloobs.play();

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
        
        if (entry.intersectionRatio > 0.5) {
            bubbleAnimation.play();
            console.log('enter social');
        } else {
            // bubbleAnimation.reverse();
            console.log('leave social');
        }
    });
},{ 
    threshold:  [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '0px -300px 0px -300px'
});

observer2.observe(sm);




// PKT


var tween = TweenMax.fromTo(".section-with-photo__photo-cell--pkt img:nth-child(2)", 1, { y:'-=15%' }, {y:'+=20%', ease: Power0.easeNone});
var tween2 = TweenMax.fromTo(".section-with-photo__photo-cell--pkt img:nth-child(3)", 1, { y:'-=10%' }, {y:'+=20%', ease: Power0.easeNone});

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--pkt", duration: "120%", triggerHook:1})
                .setTween(tween)
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--pkt", duration: "120%", triggerHook:1})
                .setTween(tween2)
                // .addIndicators()
                .addTo(controller);



// youtube


var tween1 = TweenMax.fromTo(".section-with-photo__photo-cell--youtube img:nth-child(1)", 1, { y:'-10%' }, {y:'10%', ease: Power0.easeNone});
var tween2 = TweenMax.fromTo(".section-with-photo__photo-cell--youtube img:nth-child(2)", 1, { y:'-20%' }, {y:'20%', ease: Power0.easeNone});
var tween3 = TweenMax.fromTo(".section-with-photo__photo-cell--youtube img:nth-child(3)", 1, { y:'-10%' }, {y:'10%', ease: Power0.easeNone});
var tween4 = TweenMax.fromTo(".section-with-photo__photo-cell--youtube img:nth-child(4)", 1, { y:'-5%' }, {y:'5%', ease: Power0.easeNone});

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--youtube", duration: "120%", triggerHook:1})
                .setTween(tween1)
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--youtube", duration: "120%", triggerHook:1})
                .setTween(tween2)
                // .addIndicators()
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--youtube", duration: "120%", triggerHook:1})
                .setTween(tween3)
                // .addIndicators()
                .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--youtube", duration: "120%", triggerHook:1})
                .setTween(tween4)
                // .addIndicators()
                .addTo(controller);



// mailing



var tween = TweenMax.staggerFrom(".section-with-photo__photo-cell--mailing img", 1, { scale:.9, opacity: 0, y:'+=1%',  ease: Elastic.easeInOut}, .2);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--mailing", triggerHook:0.5})
                .setTween(tween)
                // .addIndicators()

                .addTo(controller);

// new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--mailing", duration: "120%", triggerHook:1})
//                 .setTween(tween4)
//                 // .addIndicators()
//                 .addTo(controller);

// design


var meble = "#Origami_Chair, #Vase,  #Lamp_02";
var sales = "#sale1, #sale2";
var box1 = "#box1";
var box2 = "#box2";
var box3 = "#box3";
var box1Tween = TweenMax.from(box1, 1, { y:'-=150', ease:Power0.easeNone});
var box2Tween = TweenMax.from(box2, 1, { y:'-=50' , ease: Power0.easeNone});
var box3Tween = TweenMax.from(box3, 1, { y:'-=100', ease: Power0.easeNone});
var tchair = TweenMax.staggerFrom(meble, 1, { y:'-=50', opacity:0, ease: Power4.easeOut},.3);
TweenMax.set(sales, {transformOrigin:"50% 50%"});
var aimSales = TweenMax.staggerFrom(sales, 2, { scale:0, opacity:0, delay:.1, transformOrigin:'50% 50%', ease: Elastic.easeInOut},.3);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--design", duration: "120%", triggerHook:1})
                .setTween(box1Tween)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--design", duration: "120%", triggerHook:1})
                .setTween(box2Tween)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--design", duration: "120%", triggerHook:1})
                .setTween(box3Tween)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--design",  triggerHook:.5})
                .setTween(tchair)
                // .addIndicators()
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--design",  triggerHook:.5})
                .setTween(aimSales)
                // .addIndicators()
                .addTo(controller);



// biznes lokalnie


var tween = TweenMax.fromTo(".section-with-photo__photo-cell--google img:nth-child(2)", 2, { y:"-=30%" },{ y:"+=40%" });
var tweenIn = TweenMax.staggerFrom(".section-with-photo__photo-cell--google img", 1, { x:"+=30%", opacity:0 },.2);

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--google", duration: "130%", triggerHook:1,  ease: Power0.easeNone})
                .setTween(tween)
                // .addIndicators()
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--google",  triggerHook:1,  ease: Power0.easeNone})
                .setTween(tweenIn)
                // .addIndicators()
                .addTo(controller);


// marketplace


var tween = TweenMax.fromTo(".section-with-photo__photo-cell--marketplace #leaf", 2, { y:"-=100%" },{ y:"+=200%" });
var tween2 = TweenMax.from(".section-with-photo__photo-cell--marketplace #can", 2, { scale:0.5, top:'9%', transformOrigin:'50% 50%', left:'48%', rotation:'30deg', ease: Power3.easeInOut });

new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--marketplace", duration: "140%", triggerHook:1})
                .setTween(tween)
                // .addIndicators()
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-with-photo__photo-cell--marketplace", triggerHook:.5})
                .setTween(tween2)
                // .addIndicators()
                .addTo(controller);


// marketing

var timeline = new TimelineMax();
timeline.from(".section-with-expandedphoto__photo-cell--marketing img:nth-child(2)", 1, { ease: Power3.easeInOut, scale:.8, opacity:0 });
timeline.from(".section-with-expandedphoto__photo-cell--marketing img:nth-child(1)", 1, { ease: Power3.easeInOut, scale:.8, opacity:0, x:"+=100%" }, .3);
timeline.from(".section-with-expandedphoto__photo-cell--marketing img:nth-child(3)", 1, { ease: Power3.easeInOut, scale:.8, opacity:0, x:"-=100%"  }, .3);


new ScrollMagic.Scene({triggerElement: ".section-with-expandedphoto__photo-cell--marketing", triggerHook:.5})
                .setTween(timeline)
                // .addIndicators()
                .addTo(controller);

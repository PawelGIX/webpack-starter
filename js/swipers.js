//   // import Swiper JS
//   import Swiper, { Navigation, Pagination }  from 'swiper';
//   // import Swiper styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

//   // configure Swiper to use modules
//   Swiper.use([Navigation, Pagination]);

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var prevSlide = null;
const divTopSwiper = document.querySelector('#topSwiper');
export const topSwiper = new Swiper('#topSwiper', {
	// If we need pagination
	pagination: {
		el: '#topSwiper .swiper-pagination',
		clickable: true
	},
	grabCursor: true,
	spaceBetween: 0,
	// effect: "fade",
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	// effect: "creative",
	// creativeEffect: {
	// 	prev: {
	// 		shadow: true,
	// 		translate: ["-120%", 0, -500],
	// 	},
	// 	next: {
	// 		shadow: true,
	// 		translate: ["120%", 0, -500],
	// 	},
	// },

	// Navigation arrows
	navigation: {
		nextEl: '#topSwiper .swiper-button-next',
		prevEl: '#topSwiper .swiper-button-prev',
	},
});

function resetSlide(slide) {
		var tl = gsap.timeline();
		tl.to(slide.querySelectorAll('.swiper-top__wrapper'), .4, {
			opacity: 0,
		});
		tl.to(slide.querySelectorAll('h1,p'), .4, {
			y: 0,
			opacity: 0,
		}, 0);
		tl.to(slide.querySelectorAll('img'), .4, {
			x: 0,
			opacity: 0,
		},0);
}
if(divTopSwiper){
	topSwiper.on('slideChangeTransitionStart', function (swiper) {
		console.log('slide changed', swiper);
		var slide = swiper.visibleSlides[0];
		var tl = gsap.timeline();
		tl.fromTo(slide.querySelectorAll('.swiper-top__wrapper'), .4, {opacity:0}, { opacity: 1, stagger:.1 });
		tl.fromTo(slide.querySelectorAll('h1,p,a,button'), .4, {y:"30", opacity:0},{ y: 0, opacity: 1, stagger:.1 },.1);
		tl.fromTo(slide.querySelectorAll('img'), .4, {x:"60", opacity:0},{ x: 0, opacity: 1, stagger:.1 },.2);
		
	});
	
	console.log('slide init', topSwiper);
	var slide = topSwiper.visibleSlides[0];
	var tl = gsap.timeline();
	tl.fromTo(slide.querySelectorAll('.swiper-top__wrapper'), .4, {opacity:0}, { opacity: 1, stagger:.1 });
	tl.fromTo(slide.querySelectorAll('h1,p,a,button'), .4, {y:"30", opacity:0},{ y: 0, opacity: 1, stagger:.1 },.1);
	tl.fromTo(slide.querySelectorAll('img'), .4, {x:"60", opacity:0},{ x: 0, opacity: 1, stagger:.1 },.2);
	
}
	

export const newsSwiper = new Swiper('#newsSwiper', {
	
	// If we need pagination
	pagination: {
		el: '#newsSwiper .swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: false,
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 1,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			// spaceBetween: 0
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			// spaceBetween: 0
		},
		// when window width is >= 640px
		1000: {
			slidesPerView: 3,
			// spaceBetween: 0
		}
	}
});




export const productThumbsSwiper = new Swiper('#productThumbsSwiper', {
	
	// If we need pagination
	pagination: {
		el: '#productThumbsSwiper .swiper-pagination',
		clickable: true
	},
	freeMode: true,
	watchSlidesProgress: true,
	// Navigation arrows
	// navigation: true,
	navigation: {
		nextEl: '#productThumbsSwiper .swiper-button-next',
		prevEl: '#productThumbsSwiper .swiper-button-prev',
	},
	// Default parameters
	slidesPerView: 2,
	spaceBetween: 0,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		540: {
			slidesPerView: 3,
			// spaceBetween: 0
		},
		680: {
			slidesPerView: 4,
			// spaceBetween: 0
		},
		992: {
			slidesPerView: 2,
			// spaceBetween: 0
		},
	}
});

const swiperProductName = new Swiper('#productNameSwiper', {

	direction: 'vertical',
	// mousewheelControl: false,
	slidesPerView: 1,
	// freeMode: true,
	// freeModeSticky: true
});


export const productSwiper = new Swiper('#productSwiper', {

	// If we need pagination
	pagination: false,
	// pagination: {
	// 	el: '#productSwiper .swiper-pagination',
	// 	clickable: true
	// },


	thumbs: {
		swiper: productThumbsSwiper,
	},
	// Navigation arrows
	navigation: false,
	// navigation: {
	// 	nextEl: '#productSwiper .swiper-button-next',
	// 	prevEl: '#productSwiper .swiper-button-prev',
	// },
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 0,
});
const $refList = $('.reference-list');
const $btnsRef = $('.reference-list .btn');
productSwiper.on('slideChange', swiper => {
	
	$btnsRef.eq(swiper.realIndex).removeClass('hollow').siblings().addClass('hollow');
	swiperProductName.slideTo(swiper.realIndex);
});
if ($refList.length && $btnsRef.length) {
	$refList.on('click', e => {
		e.preventDefault();
		const index = $btnsRef.index(e.target);
		// debugger;
		if (index > -1) {
			productSwiper.slideTo(index);
			swiperProductName.slideTo(index);
			$btnsRef.addClass('hollow');
			$(e.target).removeClass('hollow');
		}
	});
}



export const relatedProductsSwiper = new Swiper('#relatedProductsSwiper', {

	// If we need pagination
	// pagination: false,
	pagination: {
		el: '#relatedProductsSwiper .swiper-pagination',
		clickable: true
	},


	// Navigation arrows
	// navigation: false,
	navigation: {
		nextEl: '#relatedProductsSwiper .swiper-button-next',
		prevEl: '#relatedProductsSwiper .swiper-button-prev',
	},
	// Default parameters
	slidesPerView: 2,
	spaceBetween: 0,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		340: {
			slidesPerView: 2,
			// spaceBetween: 0
		},
		// when window width is >= 320px
		600: {
			slidesPerView: 2,
			// spaceBetween: 0
		},
		900: {
			slidesPerView: 4,
			// spaceBetween: 0
		},
	}
});

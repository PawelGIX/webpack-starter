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

export const topSwiper = new Swiper('#topSwiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-120%", 0, -500],
		},
		next: {
			shadow: true,
			translate: ["120%", 0, -500],
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

export const newsSwiper = new Swiper('#newsSwiper', {
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
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
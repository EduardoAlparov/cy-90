import Modal from "./modules/Modal.js";
import maps from "./modules/maps.js";

// import lazyload from './modules/lazyload.js';

import fancybox from './modules/fancybox.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import setFixedHeader from './modules/setFixedHeader.js';

import animationsTriggers from './modules/animationsTriggers.js';
import carouselSwiper from './modules/carouselSwiper.js';
import cascadeSliderAnimation from './modules/cascadeSliderAnimation.js';
import simpleSectionAnimation from './modules/simpleSectionAnimation.js';
import partnersSwiper from './modules/partnersSwiper.js';
import navbarSwitch from './modules/navbarSwitch.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    body.classList.remove('preload');

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    maps();

    // lazyload for images, videos, iframes and objects:
    // lazyload();

    // fancybox images modals:
    fancybox();

    // other scripts:

    setHeaderPadding();
    setFixedHeader();

    animationsTriggers();
    carouselSwiper();
    cascadeSliderAnimation();
    simpleSectionAnimation();
    partnersSwiper();
    navbarSwitch();
})

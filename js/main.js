import Modal from "./modules/Modal.js";
import maps from "./modules/maps.js";

import validation from './modules/validation.js';
import masks from './modules/masks.js';
import lazyload from './modules/lazyload.js';

import fancybox from './modules/fancybox.js';

import setHeaderPadding from './modules/setHeaderPadding.js';
import carouselSwiper from './modules/carouselSwiper.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    // masks and validation:
    // validation();
    // masks();

    // lazyload for images, videos, iframes and objects:
    // lazyload();

    // fancybox images modals:
    // fancybox();

    // other scripts:
    setHeaderPadding();
    carouselSwiper();
    maps();
})

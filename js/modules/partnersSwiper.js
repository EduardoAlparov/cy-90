export default () => {
    const sections = document.querySelectorAll('.js-partners-swiper');

    sections.forEach((section) => {
        const swMobile = section.querySelector('.partners-section__swiper--mobile.swiper');
        const swTop = section.querySelector('.partners-section__swiper--top.swiper');
        const swBottom = section.querySelector('.partners-section__swiper--bottom.swiper');

        const isMobile = window.matchMedia('(max-width: 992px)').matches;

        const swiperMobile = new Swiper(swMobile, {
            init: false,
            spaceBetween: 56,
            speed: 7000,
            loop: true,
            loopAdditionalSlides: 0,

            freeMode: true,
            freeModeMomentum: false,

            slidesPerView: 'auto',
            centeredSlides: false,
            centeredSlidesBounds: false,
            centerInsufficientSlides: true,

            autoplay: {
                enabled: true,
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: true,
            },
        });

        const swiperTop = new Swiper(swTop, {
            init: false,
            loop: true,
            loopAdditionalSlides: 0,

            freeMode: true,
            freeModeMomentum: false,

            spaceBetween: 211,
            speed: 15000,

	        slidesPerView: 'auto',
            centeredSlides: true,
            centeredSlidesBounds: true,
            centerInsufficientSlides: true,

            autoplay: {
                enabled: true,
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: true,
            },

        });

        const swiperBottom = new Swiper(swBottom, {
            init: false,
            loop: true,
            loopAdditionalSlides: 0,

            freeMode: true,
            freeModeMomentum: false,

            spaceBetween: 164,
            speed: 16000,

	        slidesPerView: 'auto',
            centeredSlides: true,
            centeredSlidesBounds: true,
            centerInsufficientSlides: true,

            autoplay: {
                enabled: true,
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: true,
                reverseDirection: true,
            },

        });

        if(isMobile) {
            swiperMobile.init();
        } else {
            swiperTop.init();
            swiperBottom.init();

            swiperTop.autoplay.stop();
            swiperBottom.autoplay.stop();

            ScrollTrigger.create({
                trigger: section,
                start: 'top center-=15%',
                once: true,
                markers: false,
                onToggle: () => {
                    swiperTop.autoplay.start();
                    swiperBottom.autoplay.start();
                },
            });
        }
    })
}

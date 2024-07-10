export default () => {
    const sections = document.querySelectorAll('.js-simple-section');

    sections.forEach((section) => {
        const sw = section.querySelector('.cascade-section__swiper.swiper');

        const swiper = new Swiper(sw, {
            speed: 700,
            parallax: true,

            freeMode: {
                enabled: true,
                sticky: true,
            },

            autoplay: {
                delay: 2000,
                stopOnLastSlide: false
            },
        });

        swiper.autoplay.stop();

        ScrollTrigger.create({
            trigger: section,
            start: 'top center-=10%',
            once: true,
            markers: false,
            onToggle: () => {
                swiper.autoplay.start();
            },
        });
    })
}

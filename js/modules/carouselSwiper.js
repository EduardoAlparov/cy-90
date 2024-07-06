export default () => {
    const carousels = document.querySelectorAll('.js-carousel');

    carousels.forEach((carousel) => {
        const sw = carousel.querySelector('.carousel-section__swiper.swiper');

        const swiper = new Swiper(sw, {
            speed: 900,
            parallax: true,

            autoplay: {
                delay: 2500
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' swiper-pagination-line">' + "</span>";
                },
            }
        });

        swiper.autoplay.stop();

        ScrollTrigger.create({
            trigger: carousel,
            start: 'top center-=30%',
            once: true,
            markers: false,
            onToggle: () => {
                // swiper.autoplay.start();
            },
        });
    })
}

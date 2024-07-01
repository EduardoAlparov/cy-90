export default () => {
    const sections = document.querySelectorAll('.js-partners-swiper');

    sections.forEach((section) => {
        const sw = section.querySelector('.partners-section__swiper.swiper');
        const isMobile = window.matchMedia('(max-width: 992px)').matches;

        const swiper = new Swiper(sw, {
            init: false,
            spaceBetween: 56,
            slidesPerView: 1.1,
        });

        if(isMobile) {
            swiper.init();
        } else {
            return;
        }
    })
}

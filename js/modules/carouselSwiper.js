export default () => {
    const carousels = document.querySelectorAll('.js-carousel');

    carousels.forEach((carousel) => {
        const sw = carousel.querySelector('.carousel-section__swiper.swiper');
        const swiper = new Swiper(sw, {
            speed: 900,
            parallax: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' swiper-pagination-line">' + "</span>";
                },
            },

            breakpoints: {
                992: {

                }
              }
        });
    })
}

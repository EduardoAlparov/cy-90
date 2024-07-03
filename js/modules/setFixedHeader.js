export default () => {
    gsap.registerPlugin(ScrollTrigger);

    const header = document.querySelector('.page-header');

    if(!header) return;
    const vh = (coef) => window.innerHeight * (coef/100);

    const strHeader = ScrollTrigger.create({
        trigger : document.querySelector('.page-content'),
        start: vh(5) + ' top',
        onUpdate: (self) => {
            header.classList.add('page-header--fixed');
        },
        onLeaveBack: () => {
            header.classList.remove('page-header--fixed');
        },
        // markers: true,
    });
}

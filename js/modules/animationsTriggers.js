export default () => {
    const triggers = document.querySelectorAll('.js-animation-trigger');
    const isMobile = window.matchMedia('(max-width: 992px)').matches;
    let startPercent;

    isMobile ? (startPercent = 20) : (startPercent = 0);

    triggers.forEach((trigger) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: `top center-=${startPercent}%`,
            once: true,
            markers: false,
            onToggle: () => {
                trigger.classList.remove('js-animation-trigger');
            },
        });
    })
}

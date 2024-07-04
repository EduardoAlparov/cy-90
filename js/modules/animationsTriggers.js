export default () => {
    const triggers = document.querySelectorAll('.js-animation-trigger');

    triggers.forEach((trigger) => {
        ScrollTrigger.create({
            trigger: trigger,
            start: 'top center-=0%',
            once: true,
            markers: false,
            onToggle: () => {
                trigger.classList.remove('js-animation-trigger');
            },
        });
    })
}

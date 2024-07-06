export default () => {
    const sections = document.querySelectorAll('.js-cascade-section');
	const isMobile = window.matchMedia('(max-width: 992px)').matches;
    let startPercent;
    let endPercent;

    isMobile ? (startPercent = 38) : (startPercent = 25);
    isMobile ? (endPercent = 45) : (endPercent = 10);

    sections.forEach((section) => {
		const tl = gsap.timeline();
		tl.to(".js-cascade-slider", {xPercent: -200, duration: 3.5})

		ScrollTrigger.create({
			animation: tl,
			trigger: section,
			start: `top center-=${startPercent}%`,
			end: `bottom center+=${endPercent}%`,
			scrub: 4.5,
			once: true,
			markers: false
		});
    })
}

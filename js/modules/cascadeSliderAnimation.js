export default () => {
    const sections = document.querySelectorAll('.js-cascade-section');

    sections.forEach((section) => {
		const tl = gsap.timeline();
		tl.to(".js-cascade-slider", {xPercent: -200, duration: 3.5})

		ScrollTrigger.create({
			animation: tl,
			trigger: section,
			start: 'top center-=25%',
			end: 'bottom center+=10%',
			scrub: 4.5,
			once: true,
			markers: false
		});
    })
}

export default () => {
    const navbars = document.querySelectorAll('.js-navbar');

    navbars.forEach((navbar) => {
        navbar.addEventListener('click', (e) => {
            if(e.target.closest('.js-navbar-link')) {
                e.preventDefault();

                const btn = e.target.closest('.js-navbar-link');
                const ELEMENT_CLASS = 'js-navbar-link';
                const ACTIVE_CLASS = '_active';
                const activeItem = navbar.querySelector(`.${ELEMENT_CLASS}.${ACTIVE_CLASS}`);

                if (activeItem !== btn) activeItem?.classList.remove(ACTIVE_CLASS);

                btn.classList.toggle(ACTIVE_CLASS);

                const wrapper = navbar.closest('.js-switchable-windows');

                if(wrapper) {
                    const id = btn.dataset.switchId;
                    const findedEl = document.getElementById(id);
                    const windows = wrapper.querySelectorAll('[data-switch-window]');

                    if(id && findedEl) {
                        windows.forEach((window) => {
                            window.classList.add('display-none');
                        })

                        findedEl.classList.remove('display-none');
                    } else {
                        return;
                    }
                }
            }
        })
    })
}

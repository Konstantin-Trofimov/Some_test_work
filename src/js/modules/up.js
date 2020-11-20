'use strict';

const pageUp = () => {
    const up = document.querySelector('.pageup');
    
    document.addEventListener('scroll', () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            up.classList.remove('hide');
        } else if (window.pageYOffset <= 110) {
            up.classList.add('hide');
        }
    });

    up.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.header').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}


export default pageUp;
'use strict';

const selectFav = () => {
    const likes = document.querySelectorAll('.card-like'),
    message = document.querySelector('.add-to-fav');
    

    likes.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('liked');

            if (elem.classList.contains('liked')) {
                message.classList.toggle('hide');
                setTimeout(() => {
                    message.classList.toggle('hide');
                }, 1000);
            }   
        });
    });
}

export default selectFav;
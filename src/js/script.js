'use strict';

import pageUp from './modules/up';
import addCards from './modules/cards';
import sortCards from './modules/sort';
import validation from './modules/validate';
import selectFav from './modules/fav';

window.addEventListener('DOMContentLoaded', () => {

    pageUp();
    addCards();
    sortCards();
    validation();
    selectFav();

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
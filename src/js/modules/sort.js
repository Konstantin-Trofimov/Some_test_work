'use strict';

const sortCards = () => {

    const cardsWrap = document.querySelector('.main__cards');

    const insertAfter = (elem, refElem) => {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    const sortCardsByIncr = (data) => {
        for (let i = 0; i < cardsWrap.children.length; i++) {
            for (let j = i; j < cardsWrap.children.length; j++) {

                if (+cardsWrap.children[i].getAttribute(data) < +cardsWrap.children[j].getAttribute(data)) {
                    let replaceNode = cardsWrap.replaceChild(cardsWrap.children[j], cardsWrap.children[i]);

                    insertAfter(replaceNode, cardsWrap.children[i]);
                }
            }
        }
    }

    const sortCardsByDesc = (data) => {
        for (let i = 0; i < cardsWrap.children.length; i++) {
            for (let j = i; j < cardsWrap.children.length; j++) {
                
                if (+cardsWrap.children[i].getAttribute(data) > +cardsWrap.children[j].getAttribute(data)) {
                    let replaceNode = cardsWrap.replaceChild(cardsWrap.children[j], cardsWrap.children[i]);

                    insertAfter(replaceNode, cardsWrap.children[i]);  
                }
            }
        }
    }

    const sortEvent = (button, data, switcher) => {
        document.querySelector(button).addEventListener('click', () => { 
            if (switcher) {
                sortCardsByIncr(data);
                switcher = !switcher;
            } else {
                sortCardsByDesc(data);
                switcher = !switcher;
            } 
        });
    }

    sortEvent('.main__menu-price', 'data-price', true);
    sortEvent('.main__menu-age', 'data-age', true);

}

export default sortCards;
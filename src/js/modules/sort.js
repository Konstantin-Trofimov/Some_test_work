'use strict';

const sortCards = () => {

    const cardsWrap = document.querySelector('.main__cards');

    const insertAfter = (elem, refElem) => {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    const sortCardsByIncr = (data) => {
        for (let i = 0; i < cardsWrap.childNodes.length; i++) {
            for (let j = i; j < cardsWrap.childNodes.length; j++) {

                if (+cardsWrap.childNodes[i].getAttribute(data) < +cardsWrap.childNodes[j].getAttribute(data)) {
                    let replaceNode = cardsWrap.replaceChild(cardsWrap.childNodes[j], cardsWrap.childNodes[i]);

                    insertAfter(replaceNode, cardsWrap.childNodes[i]);
                }
            }
        }
    }

    const sortCardsByDesc = (data) => {
        for (let i = 0; i < cardsWrap.childNodes.length; i++) {
            for (let j = i; j < cardsWrap.childNodes.length; j++) {
                
                if (+cardsWrap.childNodes[i].getAttribute(data) > +cardsWrap.childNodes[j].getAttribute(data)) {
                    let replaceNode = cardsWrap.replaceChild(cardsWrap.childNodes[j], cardsWrap.childNodes[i]);

                    insertAfter(replaceNode, cardsWrap.childNodes[i]);  
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
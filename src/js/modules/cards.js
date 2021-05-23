'use strict';

const addCards = () => {

    class Card {
        constructor(img, alt, age, price, discount, sold, parentSelector) {
            this.img = img;
            this.alt = alt;
            this.age = age;
            this.price = price;
            this.discount = discount;
            this.parent = document.querySelector(parentSelector);
            this.sold = sold;
            this.active = 'hide'
            this.isSold();
        }

        isDiscount() {
            if (this.discount) {
                return 'active';
            } else {
                return 'hide';
            }
        }

        isSold() {
            if (this.sold) {
                
                return 'active';
            } else {
                this.active = 'active';
                return 'hide';
            }
        }

        render() {
            const card = document.createElement('article');

            card.setAttribute('data-price', this.price);
            card.setAttribute('data-age', this.age);
            card.classList.add('card')

            card.innerHTML = `
                <img src="${this.img}" alt="${this.alt}" class="card-img">
                <div class="card-discount ${this.isDiscount()}">-40%</div>
                <img src="./assets/icons/like.svg" class="card-like"></img>
                <div class="card-info">
                    <h3 class="card-info__title">
                        Кот полосатый
                    </h3>
        
                    <div class="card-info__wrapper">
                        <div class="card-info__subtitle">
                            Коричневый окрас
                        </div>
                        <div class="card-info__age">
                            <div class="card-info__age-val">
                                ${this.age} мес.
                            </div>
                            <div class="card-info__subtitle">
                                Возраст
                            </div>
                        </div>
                        <div class="card-info__descr">
                            <div class="card-info__descr-val">
                                4
                            </div>
                            <div class="card-info__subtitle">
                                Кол-во лап
                            </div>
                        </div>
                    </div>
        
                    <div class="card-info__price">
                        ${this.price} руб.
                    </div>
                </div>
                <button class="card-btn card-btn_active ${this.active} btn">Купить</button>
                <button class="card-btn card-btn_disabled ${this.isSold()}  btn">Продан</button>
                
            `;

            this.parent.appendChild(card);
        }
    };

    const cats = [
        {
            img: './assets/img/cat_1.jpg',
            alt: 'cat',
            age: 2,
            price: 30000,
            discount: true,
            sold: false,
        },
        {
            img: './assets/img/cat_2.jpg',
            alt: 'cat',
            age: 2,
            price: 40000,
            discount: false,
            sold: true,
        },
        {
            img: './assets/img/cat_3.jpg',
            alt: 'cat',
            age: 2,
            price: 20000,
            discount: false,
            sold: false,
        },
        {
            img: 'assets/img/cat_1.jpg',
            alt: 'cat',
            age: 2,
            price: 25000,
            discount: false,
            sold: false,
        },
        {
            img: 'assets/img/cat_3.jpg',
            alt: 'cat',
            age: 2,
            price: 30000,
            discount: true,
            sold: false,
        },
        {
            img: './assets/img/cat_2.jpg',
            alt: 'cat',
            age: 2,
            price: 10000,
            discount: false,
            sold: true,
        }
    ];
 
    cats.forEach(({ 
        img,
        alt,
        age,
        price,
        discount,
        sold
    }) => {
        new Card(img, alt, age, price, discount, sold, '.main__cards').render();
    });

}

export default addCards;
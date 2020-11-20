/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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
      this.active = 'hide';
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
      card.classList.add('card');
      card.innerHTML = `
                <img src="${this.img}" alt="${this.alt}" class="card-img">
                <div class="card-discount ${this.isDiscount()}">-40%</div>
                <div class="card-like"></div>
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
      this.parent.append(card);
    }

  }

  ;
  const cats = [{
    img: './img/cat_1.jpg',
    alt: 'cat',
    age: 2,
    price: 30000,
    discount: true,
    sold: false
  }, {
    img: './img/cat_2.jpg',
    alt: 'cat',
    age: 2,
    price: 40000,
    discount: false,
    sold: true
  }, {
    img: './img/cat_3.jpg',
    alt: 'cat',
    age: 2,
    price: 20000,
    discount: false,
    sold: false
  }, {
    img: './img/cat_1.jpg',
    alt: 'cat',
    age: 2,
    price: 25000,
    discount: false,
    sold: false
  }, {
    img: './img/cat_3.jpg',
    alt: 'cat',
    age: 2,
    price: 30000,
    discount: true,
    sold: false
  }, {
    img: './img/cat_2.jpg',
    alt: 'cat',
    age: 2,
    price: 10000,
    discount: false,
    sold: true
  }];
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
};

/* harmony default export */ __webpack_exports__["default"] = (addCards);

/***/ }),

/***/ "./src/js/modules/fav.js":
/*!*******************************!*\
  !*** ./src/js/modules/fav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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
};

/* harmony default export */ __webpack_exports__["default"] = (selectFav);

/***/ }),

/***/ "./src/js/modules/sort.js":
/*!********************************!*\
  !*** ./src/js/modules/sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const sortCards = () => {
  const cardsWrap = document.querySelector('.main__cards');

  const insertAfter = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  };

  const sortCardsByIncr = data => {
    for (let i = 0; i < cardsWrap.children.length; i++) {
      for (let j = i; j < cardsWrap.children.length; j++) {
        if (+cardsWrap.children[i].getAttribute(data) < +cardsWrap.children[j].getAttribute(data)) {
          let replaceNode = cardsWrap.replaceChild(cardsWrap.children[j], cardsWrap.children[i]);
          insertAfter(replaceNode, cardsWrap.children[i]);
        }
      }
    }
  };

  const sortCardsByDesc = data => {
    for (let i = 0; i < cardsWrap.children.length; i++) {
      for (let j = i; j < cardsWrap.children.length; j++) {
        if (+cardsWrap.children[i].getAttribute(data) > +cardsWrap.children[j].getAttribute(data)) {
          let replaceNode = cardsWrap.replaceChild(cardsWrap.children[j], cardsWrap.children[i]);
          insertAfter(replaceNode, cardsWrap.children[i]);
        }
      }
    }
  };

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
  };

  sortEvent('.main__menu-price', 'data-price', true);
  sortEvent('.main__menu-age', 'data-age', true);
};

/* harmony default export */ __webpack_exports__["default"] = (sortCards);

/***/ }),

/***/ "./src/js/modules/up.js":
/*!******************************!*\
  !*** ./src/js/modules/up.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const pageUp = () => {
  const up = document.querySelector('.pageup');
  document.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      up.classList.remove('hide');
    } else if (window.pageYOffset <= 110) {
      up.classList.add('hide');
    }
  });
  up.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.header').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/modules/validate.js":
/*!************************************!*\
  !*** ./src/js/modules/validate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const validation = () => {
  const input = document.querySelector('.footer__form-input');

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate = () => {
    const email = input.value;

    if (validateEmail(email)) {
      input.classList.remove('not-valid');
      input.setAttribute('placeholder', 'Email');
    } else {
      input.classList.add('not-valid');
      input.setAttribute('placeholder', 'Введите корректный email');
    }

    return false;
  };

  document.querySelector('.footer__form').addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
    this.reset();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (validation);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/up */ "./src/js/modules/up.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sort */ "./src/js/modules/sort.js");
/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validate */ "./src/js/modules/validate.js");
/* harmony import */ var _modules_fav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fav */ "./src/js/modules/fav.js");







window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_up__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_sort__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_validate__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_fav__WEBPACK_IMPORTED_MODULE_4__["default"])();
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
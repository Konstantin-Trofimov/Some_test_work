'use strict';

const validation = () => {
    const input = document.querySelector('.footer__form-input');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;

        return re.test(email);
    }
    
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
    }

    document.querySelector('.footer__form').addEventListener('submit', function(e) {
        e.preventDefault();
        validate();
        this.reset();   
    })
}

export default validation;

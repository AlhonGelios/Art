import {getResource} from './services/requests';

const calc = (size, material, options, promocode, result) => {
    const   sizeBlock = document.querySelector(size),
            materialBlock = document.querySelector(material),
            optionsBlock = document.querySelector(options),
            promocodeBlock = document.querySelector(promocode),
            resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == ''  || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберете размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    const createOptions = (response) => {
        sizeBlock.innerHTML = '';
        let option = document.createElement('option');

        console.log(response);
    };

    getResource('http://localhost:3000/size')
        .then (res => createOptions(res))
        .catch(error => console.log(error));


    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
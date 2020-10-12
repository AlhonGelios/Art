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

    const createOptions = (response, selector, placeholder) => {
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
        //console.log(response);
        
        let option = document.createElement('option');
        option.value = '';
        option.textContent = placeholder;
        selector.appendChild(option);

        for(let key in response) {
            let option = document.createElement('option');
            option.value = response[key];
            option.textContent = key;
            //console.log(option);
            selector.appendChild(option);
        }
    };

    getResource('http://localhost:3000/size')
        .then (res => createOptions(res, sizeBlock, 'Выберите размер картины'))
        .catch(error => console.log(error));

    getResource('http://localhost:3000/material')
        .then (res => createOptions(res, materialBlock, 'Выберите материал картины'))
        .catch(error => console.log(error));

    getResource('http://localhost:3000/options')
        .then (res => createOptions(res, optionsBlock, 'Дополнительные услуги'))
        .catch(error => console.log(error));


    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;
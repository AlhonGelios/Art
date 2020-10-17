import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter_1';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item' , 'horizontal' , '.main-prev-btn' , '.main-next-btn');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-transparent', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter('.portfolio-menu', '.portfolio-wrapper', '.portfolio-no');
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
});
const cc = document.querySelector('.main__form__card-number');
const cm = document.querySelector('.main__form__card-month');
const cy = document.querySelector('.main__form__card-year');
const cn = document.querySelector('.main__form__card-name');
const cvv = document.querySelector('.main__form__card-cvv');
const popup = document.querySelector('.popup');
const btn = document.querySelector('#btn');
const loader = document.querySelector('.loader');

cc.addEventListener('input', formatCardCode);
cm.addEventListener('input', formatDateField);
cy.addEventListener('input', formatDateField);
cn.addEventListener('input', formatNameField);
btn.addEventListener('click', showPopup);

function formatCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join('-') : '';
    this.value = cardCode;
}

function formatDateField() {
    var dateField = this.value.replace(/[^\d]/g, '').substring(0, 2);
    this.value = dateField;
}

function formatNameField() {
    var nameField = this.value.replace(/[^A-Za-z\s]/g, '');
    this.value = nameField.toUpperCase();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function validateForm(form) {
    if (form.value !== '') {
        return true
    } else {
        return false
    }
}

async function showPopup() {
    if (validateForm(cc) && validateForm(cm) && validateForm(cy) && validateForm(cvv) && validateForm(cn)) {
        loader.style.display = 'block';
        await sleep(4000);
        loader.style.display = 'none';
        popup.style.display = 'flex';
    } else {
        alert('Заполните все формы для проверки!')
    }
}
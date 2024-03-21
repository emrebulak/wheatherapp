//API Imports
import { getWeather } from './api.js';
import { SwalAlert, ToastAlert } from './swal.js';

const button = document.querySelector('#button');
const input = document.querySelector('#input');
const countryText = document.querySelector('#country');
const temperatureText = document.querySelector('#temperature');
const weatherText = document.querySelector('#weather');
const feltText = document.querySelector('#felt');

button.addEventListener('click', () => {

    if (input.value != '') {
        getWeather(input.value)
            .then(data => {
                const { name, main: { temp, feels_like }, sys: { country }, weather: [{ description }] } = data;
                countryText.textContent = `${name}, ${country}`;
                temperatureText.textContent = `${temp} °C`;
                weatherText.textContent = description[0].toUpperCase() + description.slice(1);
                feltText.textContent = `Hissedilen : ${feels_like} °C`;
                ToastAlert('success', 'Hava durumu başarıyla getirildi');
                input.value = '';
                input.focus();
            });
    } else {
        SwalAlert('Hata!', 'Lütfen bir şehir adı giriniz', 'error');
    }

});
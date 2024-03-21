import { ToastAlert } from './swal.js';
const apiKey = '3509bd449385bf3a46a80b077b1d212b';
const metric = 'metric';
const lang = 'tr';

export const getWeather = async (city) => {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}&lang=${lang}`);
    const data = await response.json();
    if (data.cod == "404") {
        ToastAlert('error', data.message.toUpperCase());
        input.value = '';
        input.focus();
        return;
    } else {
        return data;
    }


};
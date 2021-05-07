const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "9128687cb8b24e3b2929d3aa359245c8"
}


function getWeather() {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);

}
function showWeather(data) {
    document.querySelector('.tempnow').innerHTML = Math.round(data.main.temp) + '&deg; Сейчас';
    document.querySelector('.tempfill').innerHTML = Math.round(data.main.feels_like) + '&deg Ощущается;';
    document.querySelector('.tempmax').innerHTML = Math.round(data.main.temp_max) + '&deg <i class="fas fa-thermometer-half"></i> Максимальная'

    document.querySelector('.pressure').innerHTML = (data.main.pressure) + ' гПа ';
    document.querySelector('.speed').innerHTML = (data.wind.speed) + ' <i class="fas fa-wind"></i>';

    console.log(data);
}


getWeather();
document.querySelector('#city').onchange = getWeather;
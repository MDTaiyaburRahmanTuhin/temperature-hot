const API_key = '4b342787027ae1eb0cebc598dc21205a';

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.weather[0].main);
    setInnerText('condition', temperature.main.temp);
    console.log(temperature);
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img = document.getElementById('weather-icon');
    img.setAttribute('src', url);
}
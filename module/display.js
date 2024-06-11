
export function displayWeather(input){
    
    const container = document.getElementById("#Card");

    const cityEl = document.getElementById('city');
    cityEl.innerText=input.location.name;
   
    const tempEl = document.getElementById('temp');
    tempEl.innerText=input.current.temp_c + '°c';

    const imagEl = document.getElementById('weather-icon');
    imagEl.src=input.current.condition.icon

    const humidityEl = document.getElementById('humidity');
    humidityEl.innerText = 'Humidity:'+ ' ' + input.current.humidity + '%';

    const windSpeedEl = document.getElementById('windSpeed');
    windSpeedEl.innerText = 'Wind Speed:' + ' ' + input.current.wind_kph + 'kp/h';
    
    

    
}
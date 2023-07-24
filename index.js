//https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные про широту долоту и город
// до 18:00
// latitudeElement.textContent = 'Широта: ' + data.latitude;
// longitudeElement.textContent = 'Долгота: ' + data.longitude;
// cityElement.textContent = 'Город: ' + data.city;
// temperatureElement.textContent = 'Температура: ' + data.temperature;
// windspeedElement.textContent = 'Скорость ветра: ' + data.windspeed;
// winddirectionElement.textContent = 'Направление ветра: ' + data.winddirection;
// timeElement.textContent = 'Время: ' + data.time;
// weatherCodeElement.textContent = 'Погода: ' + interpretWeatherCode(data.current_weather.code);

fetch('https://get.geojs.io/v1/ip/geo.json')
  .then(response => response.json())
  .then(data => {
    const latitude = data.latitude;
    const longitude = data.longitude;
    const city = data.city;

    document.getElementById('city').innerHTML = city

    console.log('Широта:', latitude);
    console.log('Долгота:', longitude);
    console.log('Город:', city);
    
  })
  .catch(error => {
    console.error('ошибка ', error);
  });



  
  async function getGeoLocation() {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true');
      const data = await response.json();
      console.log('data', data)
  
      const latitude = data.latitude;
      const longitude = data.longitude;
      const city = data.city;
      const temperature = data.current_weather.temperature;
      const windspeed = data.current_weather.windspeed;
      const winddirection = data.current_weather.winddirection;
      const time = data.current_weather.time;
  
      document.getElementById('latitude').innerHTML = latitude
      document.getElementById('longitude').innerHTML = longitude
      document.getElementById('temperature').innerHTML = temperature
      document.getElementById('windspeed').innerHTML = windspeed
      document.getElementById('winddirection').innerHTML = winddirection
      document.getElementById('time').innerHTML = time
      

      console.log('Широта:', latitude);
      console.log('Долгота:', longitude);
      console.log('Температура:',temperature);
      console.log('скорость ветра',windspeed);
      console.log('направление ветра',winddirection);
      console.log('Время', time);
  
      return { latitude, longitude, city , temperature, windspeed, winddirection,time };
    } catch (error) {
      console.error('ошибка ', error);
      
    }
  }
  
 
  getGeoLocation()
    .then(locationData => {
      
      console.log('Полученные данные:', locationData);
    })
    .catch(error => {
      
      console.error('Ошибка:', error);
    });
    function getWeatherDescription(code){
        switch (code){
        case 0: return "чистое небо";
        case 1: return "облачно";
        case 2: return "Неопознано";

    }
}
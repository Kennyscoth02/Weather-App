const card = document.querySelector ('.card');
const search = document.querySelector ('.search button');
const weatherBox = document.querySelector ('.weather-box');
const weatherDetails = document.querySelector ('.weather-details');
const error404 = document.querySelector ('.not-found');

search.addEventListener('click', () => {

    const APIKey = '29fe75c0b48080fa7e94b08889e8d8b9';
    const city = document.querySelector('.search input').value;

    if (city == '')
      return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).
    then(response => response.json()).then(json => {


      if (json.cod == '404')  {
        container.style.height = '400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');

          container.style.height = '555px';
          weatherBox.classList.add('active');
          weatherDetails.classList.add('active');
          error404.classList.remove('active');
      }

      const image = document.querySelector('.weather-box img');
      const temp = document.querySelector('.weather-box .temp');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind');

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'images/clear.png';
          break;

          case 'Rain':
          image.src = 'images/rain.png';
          break;

          case 'Snow':
          image.src = 'images/snow.png';
          break;

          case 'Mist':
          image.src = 'images/mist.png';
          break;

          case 'Drizzle':
          image.src = 'images/drizzle.png';
          break;
      
        default:
          image.src = 'images/clouds.png';
      }

      temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });
 
});
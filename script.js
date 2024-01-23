const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "6ecbedcf0c720fe8764f510d380d70dc";

const searchBox = document.querySelector(".enter-city");
const searchBtn = document.querySelector(".search-btn");
const weatherForecast = document.querySelector(".weather-Info");

async function checkout(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".humidity").innerHTML = "--";
    document.querySelector(".wind").innerHTML = "--";
  } else {
    const data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML = data.name;

    if (data.weather[0].main == "Clear") {
      weatherForecast.src = "images/images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherForecast.src = "images/images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherForecast.src = "images/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherForecast.src = "images/images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherForecast.src = "images/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherForecast.src = "images/images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkout(searchBox.value);
});

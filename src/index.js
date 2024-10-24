let apiKey = "9520o814t03ab019b07fae5815434801";

//Weather Function
function displayWeather(response) {
  let cityName = response.data.city;
  let temperature = Math.round(response.data.temperature.current);

  //document.querySelector("h1").innerHTML = `${cityName} - ${temperature}°C`;
  document.querySelector("#city-name").innerHTML = `${cityName}`;
  document.querySelector("#temperature").innerHTML = `${temperature}°C`;

  let iconUrl = `https://api.shecodes.io/weather/v1/icons/${response.data.condition.icon}.png`;
  //document.querySelector("#weather-icon").setAttribute("src", iconUrl);
}

//API
function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-input").value.toLowerCase();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

//Date and Time Function
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);

//Search - Remove?
//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", searchCity);

//Page loading + Search
document.addEventListener("DOMContentLoaded", function () {
  let searchForm = document.querySelector("#search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      searchCity(event);
    });
  }
});

async function fetchForecast() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d7e14dabc50482bba7584de4dd6a1e22`;

  try {
    // const response = await fetch(url, options);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const temp = data.main.temp; // fetching temparature
    tempSpan.innerHTML = temp;
    const feels_like_temp = data.main.feels_like; // fetching feels like temparature
    flSpan.innerHTML = feels_like_temp;
    const max_temp = data.main.temp_max; // fetching max temparature
    maxTempSpan.innerHTML = max_temp;
    const min_temp = data.main.temp_min; // fetching min temparature
    minTempSpan.innerHTML = min_temp;
    const humidity = data.main.humidity; // fetching humidity
    humiditySpan.innerHTML = humidity;

    const wind_speed = data.wind.speed; // fetching wind speed
    wsSpan.innerHTML = wind_speed;

    const cityName = data.name; // fetching city name
    cityH5.innerHTML = cityName;

    const desc = data.weather.main;
    const detailedDesc = data.weather.description;
  } catch (error) {
    console.error(error);
    window.location.href = "./failed.html";
  }
}

const cityInp = document.getElementById("city-search");
const cardBody = document.querySelector("#weather-display");
let cityVal = undefined;
const btn = document.querySelector("#check-weather");
btn.addEventListener("click", (e) => {
  cityVal = cityInp.value;
  console.log(cityVal);

  // cardBody.classList.remove("d-none");
  fetchForecast();
});

const cityH5 = document.querySelector("#city"); // city span from HTML
const tempSpan = document.querySelector("#temp-val"); // temparature span from HTML
const maxTempSpan = document.querySelector("#max-temp-val"); // max temp span
const minTempSpan = document.querySelector("#min-temp-val"); // min temp span
const humiditySpan = document.querySelector("#humidity-val"); // humidity span
const wsSpan = document.querySelector("#wind-speed-val"); // wind speed span
const flSpan = document.getElementById("fl-val");

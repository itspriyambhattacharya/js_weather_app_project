async function fetchForecast() {
  const url = `https://open-weather13.p.rapidapi.com/city?city=${cityVal}&lang=EN`;
  const options = {
    method: "GET",
    headers: {
      // "x-rapidapi-key": "53918f6a16msh2840c9c7ac4f575p12889ajsn114eb8494792", // ---> main account limit reached
      "x-rapidapi-key": "db48604ff7msh9d4729cb35c4636p1b4959jsndaeed43e63a4", // ---> using secondary account
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const temp = data.main.temp; // fetching temparature
    tempSpan.innerHTML = temp;
    const feels_like_temp = data.main.feels_like; // fetching feels like temparature
    flSpan.innerHTML = feels_like_temp;
    const max_temp = data.main.max_temp; // fetching max temparature
    maxTempSpan.innerHTML = max_temp;
    const min_temp = data.main.min_temp; // fetching min temparature
    minTempSpan.innerHTML = min_temp;
    const humidity = data.main.humidity; // fetching humidity
    humiditySpan.innerHTML = humidity;

    const wind_speed = data.wind.speed; // fetching wind speed
    wsSpan.innerHTML = wind_speed;

    const cityName = data.name; // detching city name
    spanCity.innerHTML = cityName;
  } catch (error) {
    console.error(error);
  }
}

const cityInp = document.getElementById("city-search");
let cityVal = undefined;
document.querySelector("#check-weather").addEventListener("click", (e) => {
  cityVal = cityInp.value;
  console.log(cityVal);
  // Call the function
  fetchForecast();
});

const spanCity = document.querySelector("#city"); // city span from HTML
const tempSpan = document.querySelector("#temp-val"); // temparature span from HTML
const maxTempSpan = document.querySelector("#max-temp-val"); // max temp span
const minTempSpan = document.querySelector("#min-temp-val"); // min temp span
const humiditySpan = document.querySelector("#humidity-val"); // humidity span
const wsSpan = document.querySelector("#wind-speed-val"); // wind speed span
const flSpan = document.getElementById("fl-val");

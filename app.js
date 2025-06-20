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
    const feels_like_temp = data.main.feels_like;
    const max_temp = data.main.max_temp;
    const min_temp = data.main.min_temp;
  } catch (error) {
    console.error(error);
  }
}

const cityInp = document.getElementById("city-search");
let cityVal = undefined;
document.querySelector("#check-weather").addEventListener("click", (e) => {
  cityVal = cityInp.value;
  console.log(cityVal);
});

// Call the function
// fetchForecast();

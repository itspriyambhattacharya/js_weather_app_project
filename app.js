async function fetchForecast() {
  const city = "Kolkata";
  const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "53918f6a16msh2840c9c7ac4f575p12889ajsn114eb8494792",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the function
fetchForecast();

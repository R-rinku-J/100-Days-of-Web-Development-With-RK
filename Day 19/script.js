// Your API key from WeatherAPI
const apiKey = "1fa7b43995b94744a06100054242710";

// Function to fetch and display weather
async function getWeather() {
  // Getting city name entered by user
  const city = document.getElementById('cityInput').value;

  // API URL with city and API key for WeatherAPI
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    // Fetching data from WeatherAPI
    const response = await fetch(url);
    const data = await response.json();

    // Checking if city is valid
    if (data.error) {
      document.getElementById('weatherDisplay').innerHTML = "City not found!";
      return;
    }

    // Extracting required data
    const { temp_c, temp_min, temp_max, humidity, wind_kph, condition } = data.current;
    const { name } = data.location;

    // Displaying data
    document.getElementById('weatherDisplay').innerHTML = `
      <p>City: ${name}</p>
      <p>Temperature: ${temp_c} °C</p>
      <p>Min Temperature: ${temp_min || 'N/A'} °C</p>
      <p>Max Temperature: ${temp_max || 'N/A'} °C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${wind_kph} kph</p>
      <p>Weather Condition: ${condition.text}</p>
    `;
  } catch (error) {
    document.getElementById('weatherDisplay').innerHTML = "Error fetching weather data!";
    console.error("Error:", error);
  }
}

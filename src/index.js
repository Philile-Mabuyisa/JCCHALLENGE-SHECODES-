let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

// Define weather data
const weatherData = {};

// Convert the keys in the provided weather object to title case and populate weatherData
for (const city in weather) {
  const cityTitleCase = city.charAt(0).toUpperCase() + city.slice(1);
  weatherData[cityTitleCase] = {
    temperatureCelsius: Math.round(weather[city].temp),
    humidity: weather[city].humidity,
  };
}

// Function to retrieve weather data for a city
function getWeather(city) {
  return weatherData[city];
}

// Function to display weather information
function displayWeather(city, temperatureCelsius, humidity) {
  alert(
    `It is currently ${temperatureCelsius}°C (${celsiusToFahrenheit(
      temperatureCelsius
    )}°F) in ${city} with a humidity of ${humidity}%`
  );
}

// Function to handle user input
function handleUserInput() {
  const city = prompt("Enter a city");
  const weather = getWeather(city);
  if (weather) {
    displayWeather(city, weather.temperatureCelsius, weather.humidity);
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}

// Call handleUserInput when the page loads
window.onload = handleUserInput;

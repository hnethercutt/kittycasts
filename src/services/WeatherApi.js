const url = "https://api.weatherapi.com/v1/";
const API_KEY = ""; 

/**
 * Fetches city information based on the provided input
 * @param {string} input - The input used to search for city information.
 * @returns {Promise<Object>} A promise that resolves to an object containing city data.
 * @throws {Error} If an error occurs during the fetch operation.
 */

export async function fetchCity(input) {
  //  Ensures that the input provided is not empty, null, undefined, etc.
  if (!input) {
    return;
  }

  const endpoint = "search.json";
  const query = `key=${API_KEY}&q=${input}&aqi=n`;
  const api = `${url}${endpoint}?${query}`;

  try {
    const response = await fetch(api, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch city data");
  }
}

/**
 * Fetches weather information for a given location.
 * @param {string} location - The location for which weather information is to be fetched.
 * @returns {Promise<Object>} A promise that resolves to an object containing weather data.
 * @throws {Error} If an error occurs during the fetch operation.
 */
export async function fetchWeather(location) {
  //  Ensure that the location provided is not empty, null, undefined, etc
  if (!location) {
    return;
  }

  const endpoint = "forecast.json";
  const query = `key=${API_KEY}&q=${location}&aqi=n`;
  const api = `${url}${endpoint}?${query}`;

  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);

    
    // Updates prop in WeatherPanel
    return {
      city: data.location.name,
      state: data.location.region,
      localTime: data.location.localtime,
      currentTemp: data.current.temp_f,
      feelsLike: data.current.feelslike_f,
      condition: data.current.condition.text,
      gust: data.current.gust_mph,
      wind: data.current.wind_mph,
      humidity: data.current.humidity,
      high: data.forecast.forecastday[0].day.maxtemp_f,
      low: data.forecast.forecastday[0].day.mintemp_f,
      icon: data.current.condition.icon,
    };
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch weather data");
  }
}

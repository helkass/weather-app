import axios from "axios";

const API_KEY = "2af0e2100df5b32ff67f692fcaf8c79a";
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");

const weatherData = [];

const getInputValue = () => {
  return cityInput.value.trim();
};

const validateCity = (searchCity) => {
  if (searchCity === "") {
    return "City is required";
  }
};

const fetchWeather = (city) => {
  const YOUR_API_KEY = "42fa97ab1ae20f4a773c0dc725689221";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`;

  fetch(apiUrl);
};

searchBtn.addEventListener("click", () => {
  const searchCity = getInputValue();

  alert(validateCity(searchCity));

  fetchWeather(searchCity);
});

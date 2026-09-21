const cityInput = document.querySelector("#cityInput");

let city = "";

const getInputValue = () => cityInput.value.trim();

const validateCity = (city) => {
  if (!city) return "City is required";

  return null;
};

const toggleLoading = (isLoading) => {
  document.querySelector("#loading").style.display = isLoading
    ? "flex"
    : "none";
};

document.querySelector("#searchBtn").addEventListener("click", async () => {
  city = getInputValue();
  const errorMessage = validateCity(city);

  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  try {
    toggleLoading(true);

    const YOUR_API_KEY = "42fa97ab1ae20f4a773c0dc725689221";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }

    const data = await response.json();

    console.log("Weather data:", data);
    alert(`The temperature in ${data.name} is ${data.main.temp}°C`);
  } catch (error) {
    console.error("Failed to fetch city data:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    toggleLoading(false);
  }
});

const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');

const getInputValue = () => {
  return cityInput.value.trim()
}

searchBtn.addEventListener('click', () => {
  const searchCity = getInputValue();
})
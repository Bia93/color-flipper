const array = ["#A52A2A", "blue", "yellow", "green"];
const submitButton = document.querySelector(".button");
const texts = document.querySelector(".text");
const navigatie = document.querySelector(".one");
submitButton.addEventListener("click", function () {
  const getRandomNumbers = randomNumber();
  document.body.style.backgroundColor = array[getRandomNumbers];
  texts.textContent = array[getRandomNumbers];
  navigatie.style.backgroundColor = array[getRandomNumbers];
});
function randomNumber() {
  return Math.floor(Math.random() * array.length);
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const submitButton = document.querySelector(".button");
const texts = document.querySelector(".text");
const navigatie = document.querySelector(".one");
submitButton.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const number1 = getRandomNumber();
    hexColor = hexColor + array[number1];
  }
  document.body.style.background = hexColor;
  texts.textContent = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * array.length);
}

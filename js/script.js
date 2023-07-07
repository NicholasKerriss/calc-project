let numbersArray = [];
const addButton = document.getElementById("add__button");
const deletButton = document.getElementById("delet__btn");
const averageButton = document.getElementById("calc__button1");
const filterButton = document.getElementById("calc__button2");

addButton.addEventListener("click", addNumbers);
averageButton.addEventListener("click", averageNumbers);
filterButton.addEventListener("click", filterNumbers);
deletButton.addEventListener("click", delNumbers);

function addNumbers() {
  const value = parseInt(document.getElementById("add__input").value);
  if (!isNaN(value)) {
    numbersArray.push(value);
    document.getElementById("array-result").textContent =
      numbersArray.toString();
  }
  document.getElementById("add__input").value = "";
}

function averageNumbers() {
  const initialCal = numbersArray.reduce((total, value) => total + value, 0);
  const average = initialCal / numbersArray.length;
  document.getElementById("media-result").textContent = average.toFixed(2);
}

function filterNumbers() {
  const filter = numbersArray.filter((value) => value % 2 === 0);
  document.getElementById("pares-result").textContent = filter.toString();
}
function delNumbers() {
  document.getElementById("array-result").textContent = "";
  document.getElementById("media-result").textContent = "";
  document.getElementById("pares-result").textContent = "";
}

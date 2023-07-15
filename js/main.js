import bubble from "./bubbleSort.js";
import insertion from "./insertionSort.js";
import selection from "./selectionSort.js";

const runButton = document.querySelector(".run");
const inputArr = document.getElementById("inputArr");
const sortChoice = document.getElementById("sortChoice");
const displayArea = document.querySelector(".valueDisplay");

runButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputArr.value.trim() === "") return;
  const numArr = arrHandler(inputArr.value);
  const sortedArr = sortHandler(sortChoice.value, numArr);
  if (sortedArr.every((el) => typeof el === "number" && !isNaN(el))) {
    displayValue(sortedArr, displayArea);
  }
})

const arrHandler = (array) => {
  const stringArr = array.replace(/ /g, "").split(",");
  const numArr = stringArr.map((str) => Number(str));
  return numArr
}

const sortHandler = (sortChoice, array) => {
  let sortedArr;
  switch(sortChoice) {
    case "bubble":
      sortedArr = bubble(array);
      break;
    case "insertion":
      sortedArr = insertion(array);
      break;
    case "selection":
      sortedArr = selection(array);
      break;
  }
  return sortedArr;
}

const displayValue = (array, element) => {
  const results = document.createElement("h2");
  results.classList.add("finalValue");
  results.innerText = "[" + array + "]";
  element.innerHTML = ""
  element.appendChild(results);
}

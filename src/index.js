const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdded = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

add.addEventListener("click", handleAdded);
minus.addEventListener("click", handleMinus);

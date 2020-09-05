import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// 오타 방지
const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: ADD });
};

const handleMinus = () => {
  store.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleMinus);

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// reducer는 나의 data를 수정하는 function이다.
// action은 redux에서 function을 부를 때 쓰는 두번째 파라미터 혹은 인자이다.
const reducer = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    count++;
  } else if (action.type === "MINUS") {
    count--;
  }
  return count; // 나의 application의 data가 된다.
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

// store를 구독한다. state 변화 감지.
store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleMinus);

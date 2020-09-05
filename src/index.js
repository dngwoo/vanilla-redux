import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// reducer는 나의 data를 수정하는 function이다.
const reducer = () => {
  return "hello"; // 나의 application의 data가 된다.
};

// store가 하는일은 기본적으로 나의 data(state)를 넣을 수 있는 장소를 생성한다.
const store = createStore(reducer);

console.log(store); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
console.log(store.getState()); // hello

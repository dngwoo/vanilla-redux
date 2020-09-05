import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

const addToDo = createAction("ADD");
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

const deleteToDo = createAction("DELETE");
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

console.log(addToDo.type, deleteToDo.type); // ADD, DELETE
console.log(addToDo(), deleteToDo()); // {type:"ADD", payload:undefined}, {type:"DELETE", payload:undefined}

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((v) => v.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // 불변성을 지키지 않아도 된다.
    // 리덕스 툴킷은 내부적으로 immer 라이브러리를 이용하기 때문이다.
    // 또한 return을 하게되면 불변성을 지켜야되고 return을 하지 않으면 불변성을 지키지 않아야 한다.
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    // 불변성을 지키면서 하기 위해서 return을 사용. 새로운 배열 반환.
    return state.filter((v) => v.id !== action.payload);
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

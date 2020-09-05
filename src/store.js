import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

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

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((v) => v.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

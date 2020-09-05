import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  console.log(toDo); // {text: "22", id: 1599309858660}
  return (
    <>
      <h1>Content : {toDo?.text}</h1>
      <div>Create at : {toDo?.id}</div>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    // find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
    toDo: state.find((v) => v.id === parseInt(id)),
  };
}
export default connect(mapStateToProps)(Detail);

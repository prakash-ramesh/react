import React, { useReducer, useRef } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/4.txt";
import Button from "./common/B-Button";

const ReducerHook = () => {
  const [stuState, dispatchStudent] = useReducer(studentReducer, initialState);
  const nameRef = useRef();
  const ageRef = useRef();
  const subjectRef = useRef();

  const dispatchHandler = (type, ref) => {
    dispatchStudent({
      type,
      ref,
    });
  };

  const dispatchStudentHandler = () => {
    dispatchStudent({
      type: "SET_ALL",
      age: ageRef.current.value,
      name: nameRef.current.value,
      favSubject: subjectRef.current.value,
    });
  };

  return (
    <Wrapper title="Functional Component" fileName={txt}>
      <h6>C8: useReducer</h6>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="stuName">Enter Name: </label>
          <input
            id="stuName"
            type="text"
            placeholder={stuState.name}
            ref={nameRef}
            className="form-control form-control-sm w-25 m-1 d-inline-block"
          />
          <Button onClick={(event) => dispatchHandler("SET_NAME", nameRef)}>
            Dispatch Name
          </Button>
        </div>
        <div className="form-group">
          <label htmlFor="stuAge">Enter Age: </label>
          <input
            id="stuAge"
            type="text"
            placeholder={stuState.age}
            ref={ageRef}
            className="form-control form-control-sm w-25 m-1 d-inline-block"
          />
          <Button onClick={(event) => dispatchHandler("SET_AGE", ageRef)}>
            Dispatch Age
          </Button>
        </div>
        <div className="form-group">
          <label htmlFor="stuSubject">Enter Subject: </label>
          <input
            id="stuSubject"
            type="text"
            placeholder={stuState.favSubject}
            ref={subjectRef}
            className="form-control form-control-sm w-25 m-1 d-inline-block"
          />
          <Button
            onClick={(event) => dispatchHandler("SET_FAV_SUBJECT", subjectRef)}
          >
            Dispatch Subject
          </Button>
        </div>
        <Button onClick={dispatchStudentHandler}>Submit</Button>
      </form>
      <p>
        <b>Name:</b> {stuState.name} <b>Age:</b> {stuState.age} <b>Subject:</b>{" "}
        {stuState.favSubject}
      </p>
      <p className="brief">
        useReducer() For complex object - state with multiple related
        properties, for simple independant properties useState()
      </p>
    </Wrapper>
  );
};

export default ReducerHook;

const initialState = {
  name: "Set your name !!!",
  age: "Set your age !!!",
  favSubject: "Favourite Subject",
};

const studentReducer = (state, action) => {
  if (action.type === "SET_NAME") {
    return {
      ...state,
      name: action.ref.current.value,
    };
  }
  if (action.type === "SET_AGE") {
    return {
      ...state,
      age: action.ref.current.value,
    };
  }
  if (action.type === "SET_FAV_SUBJECT") {
    return {
      ...state,
      favSubject: action.ref.current.value,
    };
  }
  if (action.type === "SET_ALL") {
    return {
      ...state,
      favSubject: action.favSubject,
      name: action.name,
      age: action.age,
    };
  }
  return initialState;
};

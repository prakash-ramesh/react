import React, { useReducer, useRef } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/8.txt";
import Button from "./common/B-Button";
import Input from "./common/E-Input";

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

  const dispatchStudentHandler = (event) => {
    event.preventDefault();

    dispatchStudent({
      type: "SET_ALL",
      age: ageRef.current.value,
      name: nameRef.current.value,
      favSubject: subjectRef.current.value,
    });
  };

  return (
    <Wrapper title="Reducer Hook" fileName={txt}>
      <h6>C8: useReducer</h6>
      <form className="form-inline" noValidate>
        <div className="form-group">
          <Input
            label="Enter Name: "
            id="stuName"
            type="text"
            placeholder={stuState.name}
            ref={nameRef}
            required
          />
          <Button onClick={(event) => dispatchHandler("SET_NAME", nameRef)}>
            Dispatch Name
          </Button>
        </div>
        <div className="form-group">
          <Input
            label="Enter Age: "
            id="stuAge"
            type="text"
            placeholder={stuState.age}
            ref={ageRef}
            required
          />
          <Button onClick={(event) => dispatchHandler("SET_AGE", ageRef)}>
            Dispatch Age
          </Button>
        </div>
        <div className="form-group">
          <Input
            label="Enter Subject: "
            id="stuSubject"
            type="text"
            placeholder={stuState.favSubject}
            ref={subjectRef}
            required
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

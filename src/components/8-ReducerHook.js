import React, { useReducer, useRef } from "react";

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
    <section className="component">
      <h6>C8: useReducer</h6>
      <div>
        <label htmlFor="stuName">Enter Name: </label>
        <input
          id="stuName"
          type="text"
          placeholder={stuState.name}
          ref={nameRef}
        />
        <button onClick={(event) => dispatchHandler("SET_NAME", nameRef)}>
          Dispatch Name
        </button>
      </div>
      <div>
        <label htmlFor="stuAge">Enter Age: </label>
        <input
          id="stuAge"
          type="text"
          placeholder={stuState.age}
          ref={ageRef}
        />
        <button onClick={(event) => dispatchHandler("SET_AGE", ageRef)}>
          Dispatch Age
        </button>
      </div>
      <div>
        <label htmlFor="stuSubject">Enter Subject: </label>
        <input
          id="stuSubject"
          type="text"
          placeholder={stuState.favSubject}
          ref={subjectRef}
        />
        <button onClick={(event) => dispatchHandler("SET_FAV_SUBJECT", subjectRef)}>
          Dispatch Subject
        </button>
      </div>
      <button onClick={dispatchStudentHandler}>Submit</button>
      <p>
        <b>Name:</b> {stuState.name} <b>Age:</b> {stuState.age} <b>Subject:</b>{" "}
        {stuState.favSubject}
      </p>
      <p className="brief">
        useReducer() For complex object - state with multiple related
        properties, for simple independant properties useState()
      </p>
    </section>
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

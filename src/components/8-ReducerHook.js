import React, { useReducer } from "react";

const studentReducer = (state, action) => {
  if (action.type === "SET_NAME") {
    return {
      name: action.name,
    };
  }
  return {
    name: "Plese set your name !!!",
  };
};

const ReducerHook = () => {
  const [stuState, dispatchStudent] = useReducer(studentReducer, { name: "Plese set your name !!!" });

  const nameChangeHandler = (event) => {
    dispatchStudent({
        type: 'SET_NAME',
        name: event.target.value
    });
  }

  return (
    <section className="component">
      <h6>C7: useReducer</h6>
      <label htmlFor="UseReducer">Enter Name: </label>
      <input id="UseReducer" type="text" placeholder={stuState.name} onChange={nameChangeHandler}/>
      <p>
        Input Text: {stuState.name}
      </p>
      <p className="brief">useREducer() For complex object - state with multiple related properties, for simple independant properties useState()</p>
    </section>
  );
};

export default ReducerHook;

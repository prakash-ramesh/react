import React, { useState } from "react";

const StateHook = (props) => {
  const [name, setName] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  return (
    <section className="component">
      <h6>C4: useState - Two way Data Binding</h6>
      <label htmlFor="2way">Enter Text: </label>
      <input id="2way" type="text" value={name} onChange={nameChangeHandler}/>
      <p>
        Input Text: {name}
      </p>
      <button onClick={() => setName('')}>Reset Text</button>
      <button onClick={() => props.liftStateUp(name)}>Update Text in Component 1 & 2</button>
      <p className="brief">Updating normal props variable by lifting State Up doesnt re-render the component, the props variable should also be a state variable
      <br/>Defining text as normal variable in app compoenent to where the state is being lifted will propgate the value to C1 and C2 only first time, 
      for subsequent update from C4 it has be converted to state variable <br/>
      Do not initialize a counter variable or list and try to maintain manually in component with use state as we will loose data on state update/rerender
      </p>
    </section>
  );
};

export default StateHook;

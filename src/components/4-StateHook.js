import React, { useState } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/4.txt";
import Button from "./common/B-Button";
import Input from "./common/E-Input";

const StateHook = (props) => {
  const [name, setName] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  return (
    <Wrapper title="State Hook" fileName={txt}>
      <h6>C4: useState - Two way Data Binding</h6>
      <Input label="Enter Text: " id="2way" type="text" value={name} onChange={nameChangeHandler} />
      <p>
        Input Text: {name}
      </p>
      <Button onClick={() => setName('')}>Reset Text</Button>
      <Button onClick={() => props.liftStateUp(name)}>Update Text in Component 1 & 2</Button>
      <p className="brief">Updating normal props variable by lifting State Up doesnt re-render the component, the props variable should also be a state variable
      <br/>Defining text as normal variable in app compoenent to where the state is being lifted will propgate the value to C1 and C2 only first time, 
      for subsequent update from C4 it has be converted to state variable <br/>
      Do not initialize a counter variable or list and try to maintain manually in component with use state as we will loose data on state update/rerender
      </p>
    </Wrapper>
  );
};

export default StateHook;

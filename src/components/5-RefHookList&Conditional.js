import React, { useState, useRef } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/5.txt";
import Button from "./common/B-Button";
import Input from "./common/E-Input";

const ListsAndConditionals = () => {
  const phrase = useRef();
  const [phrases, setPhrases] = useState([]);
  const [show, setShow] = useState(false);

  const addPhraseHandler = () => {
    setPhrases(prevState => {
      return [...prevState, phrase.current.value]
    });    
  };

  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };

  // phrase.current.value = '';

  return (
    <Wrapper title="Ref Hook, Lists And Conditionals" fileName={txt}>
      <h6>C5: Ref Hook, Lists And Conditionals</h6>

      <Input label="Enter Phrases: " id="phrase" type="text" ref={phrase} />
      {/* 
          ===> <input id="2way" type="text" value={phrase} /> <===
          You provided a `value` prop to a form field without an `onChange` handler. 
          This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly` 

          Soln: useRef()
          */}
      <Button onClick={addPhraseHandler}>Add Phrase</Button>
      <Button onClick={toggleShow} disabled={!phrases.length}>{show ? "Hide" : "Show"} Phrases</Button>

      {show && (
        <ul>
          {phrases.map((p, index) => <li key={`p${index}`}>{p}</li>)}
        </ul>
      )}
      <p className="brief">
        Unlike C4 --- When no plan to use onChange/onBlur/useState (Controlled component) on Input field  <br/>
        if component re-render is not required - useRef() <br/>
        -- Caution: restting field by useRef Variable will lead to unintended behavior (uncontrolled component)<br/>
        try resetting phrase.current.value = '' in addPhraseHandler or in the fn. , see the value in the list goes empty 
      </p>
    </Wrapper>
  );
};

export default ListsAndConditionals;

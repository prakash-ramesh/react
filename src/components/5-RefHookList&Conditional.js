import React, { useState, useRef } from "react";

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
    <section className="component">
      <h6>C5: Ref Hook, Lists And Conditionals</h6>

      <label htmlFor="phrase">Enter Phrases: </label>
      <input id="phrase" type="text" ref={phrase} />
      {/* 
          ===> <input id="2way" type="text" value={phrase} /> <===
          You provided a `value` prop to a form field without an `onChange` handler. 
          This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly` 

          Soln: useRef()
          */}
      <button onClick={addPhraseHandler}>Add Phrase</button>
      <button onClick={toggleShow} disabled={!phrases.length}>{show ? "Hide" : "Show"} Phrases</button>

      {show && (
        <ul>
          {phrases.map((p, index) => <li key={`p${index}`}>{p}</li>)}
        </ul>
      )}
      <p className="brief">
        Unlike C4 --- When no plan to use onChange/useState | onBlur/useState (Controlled component) on Input field,  <br/>
        useRef() -- Caution: restting field by useRef Variable will lead to unintended behavior (uncontrolled component)<br/>
        try resetting phrase.current.value = '' in addPhraseHandler or in the fn. , see the value in the list goes empty 
      </p>
    </section>
  );
};

export default ListsAndConditionals;

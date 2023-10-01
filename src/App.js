import { useState } from "react";
import "./App.css";
import CssModules from "./components/3-CssModules";
import Props from "./components/1-Props";
import PropsClass from "./components/2-PropsClass";
import StateHook from "./components/4-StateHook";
import ListsAndConditionals from "./components/5-RefHookList&Conditional";

function App() {
  const [text, setText] = useState('Hurricane'); 
  //defing text as normal variable will propgate the value to C1 and C2 only first time, for subsequent update from C4 it has be converted to state variable

  const liftStateUp = (userText) => {
    setText(userText);
  };

  return (
    <div className="App">
      <h1>React Refresher</h1>
      <Props name={text} className="component"/>
      <PropsClass name={text}/>
      <CssModules />
      <StateHook liftStateUp={liftStateUp}/>
      <ListsAndConditionals />
    </div>
  );
}

export default App;

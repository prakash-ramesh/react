import { useState } from "react";
import "./App.css";
import CssModules from "./components/3-CssModules";
import Props from "./components/1-Props";
import PropsClass from "./components/2-PropsClass";
import StateHook from "./components/4-StateHook";
import ListsAndConditionals from "./components/5-RefHookList&Conditional";
import FragmentsPortals from "./components/6-Fragments&Portals";
import EffectHook from "./components/7-EffectHook";
import ReducerHook from "./components/8-ReducerHook";
import ContextProvider from "./components/9-Context";
import ForwardRef from "./components/10-ImperativeHandle-ForwardRef";

function App() {
  const [text, setText] = useState("Hurricane");
  /* defing text as normal variable will propgate the value to C1 and C2 only first time,
     for subsequent update from C4 it has be converted to state variable */

  const liftStateUp = (userText) => {
    setText(userText);
  };

  return (
    <main className="container">
      <section className="row">
        <h1 className="text-center">React Refresher</h1>
        <Props name={text} className="component" />
        <PropsClass name={text} />
        <CssModules />
        <StateHook liftStateUp={liftStateUp} />
        <ListsAndConditionals />
        <FragmentsPortals />
        <EffectHook />
        <ReducerHook />
        <ContextProvider />
        <ForwardRef />
      </section>
    </main>
  );
}

export default App;

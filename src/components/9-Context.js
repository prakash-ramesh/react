import React, { Fragment, useContext, useState } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/4.txt";
import Button from "./common/B-Button";

const CounterContext = React.createContext({ counter: 0 });

const ContextProvider = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  }

  return (
    <Wrapper title="Functional Component" fileName={txt}>
      <h6>C9: Context Provider, Consumer and useContext</h6>
      <CounterContext.Provider value={{ counter: counter, reset: reset }}>
        <p className="lead">Context Provider - I am Top Level Parent Component!!!</p>
        <Button onClick={() => setCounter((prevState) => prevState + 1)}>
          Increment Counter
        </Button>
        <hr />
        <ContextConsumer />
        <ContextConsumer1 />
      </CounterContext.Provider>
    </Wrapper>
  );
};

const ContextConsumer = () => {
  return (
    <CounterContext.Consumer>
      {(ctx) => {
        return (
          <Fragment>
            <p className="lead">Context Consumer - I am Great Grand Child Component!!!</p>
            Counter: {ctx.counter}
            <Button onClick={() => ctx.reset()}>Reset Counter</Button>
          </Fragment>
        );
      }}
    </CounterContext.Consumer>
  );
};

const ContextConsumer1 = () => {
  const ctx = useContext(CounterContext);

  return (
    <Fragment>
      <p className="lead">useContext - I am Another Great Grand Child Component!!!</p>
      Counter: {ctx.counter}
      <Button onClick={() => ctx.reset()}>Reset Counter</Button>
    </Fragment>
  );
};

export default ContextProvider;

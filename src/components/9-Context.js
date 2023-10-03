import React, { Fragment, useContext, useState } from "react";

const CounterContext = React.createContext({ counter: 0 });

const ContextProvider = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className="component">
      <h6>C9: Context Provider, Consumer and useContext</h6>
      <CounterContext.Provider value={{ counter: counter }}>
        <p>Context Provider - I am Top Level Parent Component!!!</p>
        <button onClick={() => setCounter((prevState) => prevState + 1)}>
          Increment Counter
        </button>
        <hr />
        <ContextConsumer />
        <ContextConsumer1 />
      </CounterContext.Provider>
    </section>
  );
};

const ContextConsumer = () => {
  return (
    <CounterContext.Consumer>
      {(ctx) => {
        return (
          <Fragment>
            <p>Context Consumer - I am Great Grand Child Component!!!</p>
            {ctx.counter}
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
      <p>useContext - I am Another Great Grand Child Component!!!</p>
      {ctx.counter}
    </Fragment>
  );
};

export default ContextProvider;

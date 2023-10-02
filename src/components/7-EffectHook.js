import React, { Fragment, useEffect, useState } from "react";

const EffectHook = () => {
  const [counter, setCounter] = useState(11);

  useEffect(() => {
    const interval =
      counter < 11 &&
      setInterval(() => {
        setCounter((prevState) => prevState + 1);
      }, 1000);

    return () => {
      //Clean Up
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <section className="component">
      <h6>C7: useEffect</h6>
      <Fragment>
        <button disabled={counter < 11} onClick={() => setCounter(0)}>
          Start Counter
        </button>
        Counter {counter < 11 ? "Running: " : "Stopped."}{" "}
        {counter < 11 && counter}
      </Fragment>
      <p className="brief">Please <b>pass specific properties instead of the entire object as a dependency</b> to the useEffect hook dependency array</p>
    </section>
  );
};

export default EffectHook;

import React, { Fragment, useEffect, useState } from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/4.txt";
import Button from "./common/B-Button";

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
    <Wrapper title="Functional Component" fileName={txt}>
      <h6>C7: useEffect</h6>
      <Fragment>
        <Button disabled={counter < 11} onClick={() => setCounter(0)}>
          Start Counter
        </Button>
        Counter {counter < 11 ? "Running: " : "Stopped."}{" "}
        {counter < 11 && counter}
      </Fragment>
      <p className="brief">Please <b>pass specific properties instead of the entire object as a dependency</b> to the useEffect hook dependency array</p>
    </Wrapper>
  );
};

export default EffectHook;

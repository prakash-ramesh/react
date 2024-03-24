import React from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/11.txt";

function Callback(props) {
    return <Wrapper title="memo, useMemo and Callback Hook" fileName={txt}>
        <h6>C11: useCallback, useMemo and memo</h6>
        <p className="brief"><span className="concept">useCallback</span> is a React Hook that lets you cache a function definition between re-renders.</p>
        <p className="brief"><span className="concept">useMemo</span> is a React Hook that lets you cache the result of a calculation between re-renders.</p>
        <p className="brief"><span className="concept">memo</span> lets you skip re-rendering a component when its props are unchanged.</p>
    </Wrapper>
}

export default Callback;
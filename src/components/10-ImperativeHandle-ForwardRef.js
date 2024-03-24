import React from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/10.txt";

function ForwardRef(props) {
    return <Wrapper title="Forward Ref & Imperative Handle" fileName={txt}>
        <h6>C10: forwardRef and useImperativeHandle</h6>

        <p className="brief"><span className="concept">Ref forwarding</span> is an opt-in feature that lets some components take a ref they receive, 
            and pass it further down (in other words, “forward” it) to a child.</p>
        <p className="brief"><span className="concept">useImperativeHandle</span> is a React Hook that lets you customize the handle exposed as a ref</p>
    </Wrapper>
}

export default ForwardRef;
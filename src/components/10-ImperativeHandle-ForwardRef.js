import React from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/10.txt";

function ForwardRef(props) {
    return <Wrapper title="Forward Ref & Imperative Handle" fileName={txt}>
        <h6>C10: forwardRef, useImperativeHandle</h6>
    </Wrapper>
}

export default ForwardRef;
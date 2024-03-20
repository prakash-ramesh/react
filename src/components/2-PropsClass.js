import React, { Component } from 'react';
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/2.txt";

class PropsClass extends Component {
    render() {
        return <Wrapper title="Class Component" fileName={txt}>
        <h6>C2: Class Based Component</h6>
        <span className="brief">(Stateful, State can only be defined here before React 16.8)</span>
        <p className="lead">Text received by <span className='concept'>props</span> from App Component: {this.props.name}</p>
    </Wrapper>
    }
}

export default PropsClass;
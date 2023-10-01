import React, { Component } from 'react';


class PropsClass extends Component {
    render() {
        return <section className="component">
        <h6>C2: Class Based Component</h6>
        <span className="brief">(Stateful, State can only be defined here before React 16.8)</span>
        <p>Text received by <span className='concept'>props</span> from App Component: {this.props.name}</p>
    </section>
    }
}

export default PropsClass;
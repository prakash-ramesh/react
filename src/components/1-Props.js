import React from "react";

function Props(props) {
    return <section className={props.className}>
        <h6>C1: Functional Component</h6>
        <span className="brief">(Stateless, Presentational or Dumb Components before React 16.8)</span>
        <p>Text received by <span className='concept'>props</span> from App Component: {props.name}</p>
    </section>
}

export default Props;
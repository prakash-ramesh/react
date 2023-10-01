import React, {useState} from "react";
import ReactDOM from "react-dom";

import classes from "./6-Fragments&Portals.module.css";

const FragmentsPortals = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="component">
      <h6>C6: Fragments and Portals</h6>
      <Button onClick={() => setShowModal(prevState => !prevState)}>Show Modal</Button>
      {showModal && (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={() => setShowModal(prevState => !prevState)} />,
            document.getElementById("backdrop-root")
          )}
          {ReactDOM.createPortal(
            <ModalOverlay
              title='Modal'
              message='Fragments & Portals'
              onConfirm={() => setShowModal(prevState => !prevState)}
            />,
            document.getElementById("overlay-root")
          )}
        </React.Fragment>
      )}
    </section>
  );
};

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default FragmentsPortals;

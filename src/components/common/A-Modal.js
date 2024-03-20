import React from "react";
import ReactDOM from "react-dom";

import Button from "./B-Button";
import classes from "./A-Modal.module.css";
import FileViewer from "./C-FileViewer";

const Modal = (props) => {
    const code = props.fileName && <FileViewer fileName={props.fileName}/>

    return (<React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={() => props.showModal(prevState => !prevState)} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          content={props.content}
          code={code}
          onConfirm={() => props.showModal(prevState => !prevState)}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>)
  }
  
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
          {props.content}
          {props.code}
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    );
  };

  export default Modal;
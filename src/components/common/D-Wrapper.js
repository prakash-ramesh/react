import { useState } from "react";
import Button from "./B-Button";
import Modal from "./A-Modal";

const Wrapper = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="component d-flex flex-column">
      <article className="text-center">{props.children}</article>
      <aside className="d-flex justify-content-end">
        <Button onClick={() => setShowModal((prevState) => !prevState)} className='btn btn-outline-info m-1 btn-sm'>
          Show Code
        </Button>
        {showModal && (
          <Modal
            showModal={setShowModal}
            title={props.title}
            fileName={props.fileName}
          />
        )}
      </aside>
    </section>
  );
};

export default Wrapper;

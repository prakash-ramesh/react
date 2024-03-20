import React, {useState} from "react";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/6.txt";

import Button from "./common/B-Button";
import Modal from "./common/A-Modal";

const FragmentsPortals = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper title="Fragments and Portals" fileName={txt}>
      <h6>C6: Fragments and Portals</h6>
      <Button onClick={() => setShowModal(prevState => !prevState)}>Show Modal</Button>
      { showModal && 
        <Modal showModal={setShowModal} title='Modal' content='Fragments & Portals'/>
      }
    </Wrapper>
  );
};

export default FragmentsPortals;
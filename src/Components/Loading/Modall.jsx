import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modall({ message }) {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   console.log("Modal mounted");
  //   return () => {
  //     console.log("Modal unmounted");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("Modal state changed: ", show);
  // }, [show]);

  const handleClose = () => {
    setShow(false);
  };

  // console.log("Rendering modal with message:", message);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{message.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default React.memo(Modall);
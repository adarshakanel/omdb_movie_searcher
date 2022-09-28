import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Created a modal that shows the error that was generated
export const MovieErrorComponent = ({ responseError }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ top: "30%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Oops, we encountered a problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Error: <span>{responseError.message}</span>
          </div>
          <div>Closing this message will redirect you to the homepage</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

import React, { useState, render } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Iframe from './iframe'

const Example =() => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a  onClick={handleShow}>
         <article >
            <img className="img-responsive" src={tent} alt="Card image cap" />
            <div className="date">15 juli, 2019</div>
            <h3 className="h4">Imanase - jjohanj</h3>
            <p>Caro Kann defense, 24 zetten, zwart wint</p>
            <hr />   </article>
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!<Iframe /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

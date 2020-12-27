import React, { useState } from "react";
import { CardColumns, Button, Modal, Form, Card } from "react-bootstrap";

export default function ToDoCategory({ children, titleValue, descValue, submit, category }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      
      <CardColumns className="category">
      <header className="category-header">
        <h2>{category}</h2>
      </header>  
        <Button
          variant="primary"
          className="w-100 add_item_button"
          onClick={handleShow}
        >
          Add item
        </Button>

        {children}
      </CardColumns>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title"  onChange={titleValue}/>
            </Form.Group>

            <Form.Group >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" onChange={descValue} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>submit(e, category)} >Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

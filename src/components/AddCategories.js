import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddCategories({addCategory, setCategories}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="category">
      <Button
        variant="outline-primary"
        className="add_item_button"
        onClick={handleShow}
      >
        Create Category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                onChange={addCategory}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={setCategories}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

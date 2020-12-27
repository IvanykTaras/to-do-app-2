import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ToDoItem(props) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="danger" onClick={()=>props.removeItem(props.id)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

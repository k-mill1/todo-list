import React from "react";
import Nav from "react-bootstrap/Nav";

function Link(props) {
  return (
    <>
      <Nav.Item>
        <Nav.Link
          eventKey={props.filter}
          onClick={() => props.onClick()}
          disabled={props.active}
        >
          
          {props.children}
        </Nav.Link>
      </Nav.Item>
    </>
  );
}

export default Link;

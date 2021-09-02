import React from "react";
import Nav from "react-bootstrap/Nav";
import LinkContainer from './LinkContainer';
import { VisibilityFilters } from './actions'

function Links() {
  return (
    <>
      <Nav className = "links" variant="tabs" defaultActiveKey="ALL">
        <LinkContainer filter = {VisibilityFilters.SHOW_ALL}>ALL</LinkContainer>
        <LinkContainer filter = {VisibilityFilters.SHOW_ACTIVE}>ACTIVE</LinkContainer>
        <LinkContainer filter = {VisibilityFilters.SHOW_COMPLETED}>COMPLETED</LinkContainer>
      </Nav>
    </>
  );
}

export default Links;

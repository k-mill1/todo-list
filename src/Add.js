import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { addItem } from './actions';
import './App.css';
import Row from 'react-bootstrap/Row';

const Add = (props) => {
  let input;
  return (
    <>
      {/* <Card className="mb-5 mt-2">
        <Card.Body> */}
          <Form
            onSubmit = {(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              props.dispatch(addItem(input.value));
              input.value = "";
            }}
          >
            <Row className = "input-field" >
                <input placeholder = "Add new task..."
                    ref = {(node) => {
                    input = node
                    }}
                />
            </Row>
           
                <Button className="ml-5 add-button" type="submit">
                    Add
                </Button>
            
          </Form>
        {/* </Card.Body>
      </Card> */}
    </>
  );
};

export default connect() (Add);
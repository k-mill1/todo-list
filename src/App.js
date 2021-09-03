import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Add from "./Add";
import './App.css';
import Links from "./Links";
import VisibleTodoList from "./VisibleTodoList";

const App = () => {
  
  return (
    <>
  <Row>
    <Col sm={3}>
    </Col>
    <Col >
  <Card className = 'app-card' style={{maxWidth: '30rem'}}>
    <Card.Body  >
    <Card.Header className = 'todos-header'>My Todo List</Card.Header>
      <Add />
      <Links />
      <VisibleTodoList />
    <Card.Text >
    </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
    </>
  );
};

export default App;

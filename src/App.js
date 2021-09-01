import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Add from "./Add";
import './App.css';
import Links from "./Links";
import VisibleTodoList from "./VisibleTodoList";

const App = () => {
  
  return (
    <>
  <Row>
  <Card className = 'app-card' style={{width: '30rem'}}>
    <Card.Body  >
    <Card.Header className = 'todos-header'>My Todo List</Card.Header>
      <Add />
      <Links />
      <VisibleTodoList />
    <Card.Text style={{textAlign: 'justify'}}>
    </Card.Text>
    </Card.Body>
  </Card>
</Row>
    </>
  );
};

export default App;

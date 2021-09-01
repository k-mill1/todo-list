import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
    <Card.Text style={{textAlign: 'justify'}} >
      <Add />
      <Links />
      <VisibleTodoList />
    </Card.Text>
    </Card.Body>
  </Card>
</Row>
    </>
  );
};

export default App;

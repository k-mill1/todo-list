import React from "react";
import Button from "react-bootstrap/Button";
import './App.css';

function Todo(props) {
  return (
    <tr>
      <td>
        <input type="checkbox"
        style = {{margin: "0 10px"}}
        checked={props.completed}
        onChange={props.onChange} />
      </td>
      <td className = "task">
        {props.description}
      </td>
      <td>
        <Button className = "red-button" variant="danger" onClick={props.removeClick}>
          remove
        </Button>
      </td>
    </tr>
  );
}

export default Todo;

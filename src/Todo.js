import React from "react";
import Button from "react-bootstrap/Button";

function Todo(props) {
  return (
    <tr>
      <td>
        <input type="checkbox"
        style = {{margin: "0 10px"}}
        checked={props.completed}
        onChange={props.onChange} />
      </td>
      <td>
          {props.description}
      </td>

      <td>
        <Button variant="danger" onClick={props.removeClick}>
          remove
        </Button>
      </td>
    </tr>
  );
}

export default Todo;

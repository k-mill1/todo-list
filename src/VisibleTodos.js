import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Todo from "./Todo";
import './App.css';

function VisibleTodos(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <Todo
              key={item.id}
              {...item}
              onChange={() => props.onCheckboxClick(item.id)}
              removeClick={() => props.removeClick(item.id)}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              <Button className = "clearAll" variant="danger" onClick={props.removeAll}>
                Clear All
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>

    </>
  );
}

export default VisibleTodos;
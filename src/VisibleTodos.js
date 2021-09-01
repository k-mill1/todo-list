import React from "react";
import Table from "react-bootstrap/Table";
import Todo from "./Todo";

function VisibleTodos(props) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <Todo
              key={item.id}
              {...item}
              onClick={() => props.onItemClick(item.id)}
              removeClick={() => props.removeClick(item.id)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default VisibleTodos;
import React from "react";
import "../style/todo.css";
import { BiTrash } from "react-icons/bi";

const Todo = (props) => {
  return (
    <React.Fragment>
      {props.todos.map((item) => (
        <div className="todo-wrapper">
          <div
            onClick={() => {
              props.setTodos(
                props.todos.map((el) =>
                  el.id === item.id ? { ...el, complete: !el.complete } : el
                )
              );
            }}
            className={`todo ${item.complete ? "done" : " "}`}
            key={item.id}
          >
            {item.text}
          </div>
          <BiTrash
            onClick={() => props.deleteHandler(item.id)}
            className="trash-icon"
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Todo;

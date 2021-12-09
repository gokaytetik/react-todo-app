import React from "react";
import "../style/todoList.css";
import Todo from "./Todo";

const TodoList = (props) => {
  const deleteHandler = (id) => {
    const newTodos = [...props.todos].filter((el) => el.id !== id);

    props.setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <Todo
        todos={props.todos}
        setTodos={props.setTodos}
        deleteHandler={deleteHandler}
      />
    </React.Fragment>
  );
};

export default TodoList;

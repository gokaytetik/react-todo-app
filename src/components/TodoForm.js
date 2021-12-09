import React from "react";
import "../style/todoForm.css";
import { SiAddthis } from "react-icons/si";

const TodoForm = (props) => {
  const onChangeHandler = (e) => {
    props.setInput(e.target.value);
  };

  const onClickHandler = () => {
    if (props.input.length > 0) {
      props.setTodos([
        ...props.todos,
        { id: Math.random() * 10000, text: props.input, complete: false },
      ]);
    }
    props.setInput("");
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  return (
    <React.Fragment>
      <div className="form">
        <input
          onKeyPress={keyPressHandler}
          onChange={onChangeHandler}
          value={props.input}
          className="todo-input"
          type="text"
          placeholder="Add some todo"
        />
        <SiAddthis onClick={onClickHandler} className="form__add" />
      </div>
    </React.Fragment>
  );
};

export default TodoForm;

import React, { useState } from "react";
import "./style/app.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <React.Fragment>
      <div className="container">
        <h1>Gokay's Todo App</h1>
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </React.Fragment>
  );
}

export default App;

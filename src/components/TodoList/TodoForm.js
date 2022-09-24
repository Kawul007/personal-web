import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="添加to-do"
        value={input}
        name="text"
      ></input>
      <button className="todo-button">AddTodo</button>
    </form>
  );
}

export default TodoForm;

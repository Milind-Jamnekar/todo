import { useState } from "react";

function Input({ list, setTask }) {
  const [input, setInput] = useState("");

  function getTask(e) {
    e.preventDefault();
    setTask([
      ...list,
      {
        task: e.target[0].value,
        checked: false,
      },
    ]);
    setInput("");
  }

  function onChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="input-container">
      <form onSubmit={getTask}>
        <input
          type="text"
          value={input}
          onChange={onChange}
          placeholder="Add new todo"
        />
      </form>
    </div>
  );
}

export default Input;

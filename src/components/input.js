import { useState } from "react";

function Input({ task, setTask }) {
  const [input, setInput] = useState("");

  function getTask(e) {
    e.preventDefault();
    const newTask = {
      task: e.target[0].value,
      checked: false,
    };
    setTask([
      ...task,
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

import "../styles/Todo.min.css";
import Header from "./Header";
import Body from "./Body";
import Input from "./Input";
import { useState } from "react";

const list = [
  {
    task: "Release on Github 🎉",
    checked: false,
  },
  {
    task: "Support for dark/light mode",
    checked: true,
  },
  {
    task: "Make UI ",
    checked: true,
  },

  {
    task: "Add scss on react project",
    checked: true,
  },

  {
    task: "Create React Project",
    checked: true,
  },
];

function Todo() {
  const [task, setTask] = useState([...list]);

  return (
    <div className="container">
      <div className="todo">
        <Header />
        <Body list={task} />
        <Input list={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default Todo;

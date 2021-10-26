import "../styles/Todo.min.css";
import Header from "./Header";
import Body from "./Body";

function Todo() {
  return (
    <div className="container">
      <div className="todo">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default Todo;

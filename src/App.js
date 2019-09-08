import React from "react";
import Navbar from "./components/Navbar";
import TodoItem from "./TodoItem";

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
    </div>
  );
}
export default App;

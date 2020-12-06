import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

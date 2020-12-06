import React from "react";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="tamamla">✔️</button>
      <button className="sil">❌</button>
    </div>
  );
};
export default Todo;

import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const completeHandler = () => {};
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    console.log(todo);
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete" onClick={completeHandler}>
        ✔️
      </button>
      <button className="delete" onClick={deleteHandler}>
        🗑️
      </button>
    </div>
  );
};
export default Todo;

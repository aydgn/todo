import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const completeHandler = () => {};
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    console.log(todo);
  };
  return (
    <div className="todo bg-light px-4 p-2 d-flex shadow-sm">
      <li className="todo-item m-2">{text}</li>
      <button
        className="btn btn-success px-3 shadow-sm"
        onClick={completeHandler}
      >
        ✔️
      </button>
      <button className="btn btn-danger px-3 shadow-sm" onClick={deleteHandler}>
        🗑️
      </button>
    </div>
  );
};
export default Todo;

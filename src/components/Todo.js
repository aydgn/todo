import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const completeHandler = () => {};
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    console.log(todo);
  };
  return (
    <div className="todo alert alert-light mt-2 d-flex">
      <li className="todo-item">{text}</li>
      <button className="btn btn-success" onClick={completeHandler}>
        ✔️
      </button>
      <button className="btn btn-danger" onClick={deleteHandler}>
        🗑️
      </button>
    </div>
  );
};
export default Todo;

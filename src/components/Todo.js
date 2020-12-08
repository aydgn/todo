import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    console.log(todo);
  };
  return (
    <div className="todo bg-light mx-3 my-1 d-flex shadow-sm">
      <li className={`todo-item m-2 ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button
        type="button"
        className={`btn btn-sm btn-success px-3 mx-1 shadow-sm`}
        onClick={completeHandler}
      >
        ✔️
      </button>
      <button
        type="button"
        className="btn btn-sm btn-danger px-3 shadow-sm"
        onClick={deleteHandler}
      >
        🗑️
      </button>
    </div>
  );
};
export default Todo;

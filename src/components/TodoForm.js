import React from "react";

function TodoForm({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitButtonHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          placeholder=""
          onChange={inputTextHandler}
          autoFocus
          autoComplete="off"
          value={inputText}
        />
        <button className="todo-button" onClick={submitButtonHandler}>
          ➕
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

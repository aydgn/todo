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
    <div className="container-fluid">
      <form className="d-flex mt-3">
        <input
          type="text"
          name="todo-input"
          className="form-control ml-2"
          placeholder=""
          onChange={inputTextHandler}
          autoFocus
          autoComplete="off"
          value={inputText}
        />
        <button
          type="submit"
          className="btn btn-dark btn-lg mx-2 px-3"
          onClick={submitButtonHandler}
        >
          +
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

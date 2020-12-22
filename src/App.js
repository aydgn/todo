import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  // inputtext form un içindeki veriyi setinputtext ise değişen veriyi çalıştran function
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <Header />
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      {/* props ile app.js den TodoForm'a veri aktarıyoruz. */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

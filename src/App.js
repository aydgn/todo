import "./App.scss";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="todo-app">
      <Header />
      <TodoForm />
    </div>
  );
}

export default App;

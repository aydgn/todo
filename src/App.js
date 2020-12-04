import "./App.css";
import { Header } from "./components/Header";
import Test from "./components/Test";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="todo-app">
      <Header />
      <Test />
      <TodoForm />
    </div>
  );
}

export default App;

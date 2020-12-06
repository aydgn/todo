import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

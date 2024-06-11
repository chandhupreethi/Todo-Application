import "./App.css";
import Index from "./components/Header";
import TodoList from "./components/TodoList/todoList";

function App() {
  return (
    <div className="app">
      <Index />
      <TodoList />
    </div>
  );
}

export default App;

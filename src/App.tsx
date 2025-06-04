import "./App.css";
import React from "react";
import { TodoList } from "./components/TodoList";
import { useLocalStorageTodos } from "../hooks/useLocalStorageTodos";

const App: React.FC = () => {
  const { todos, completeTodo } = useLocalStorageTodos();

  return (
    <div className="min-h-screen bg-gray-100 text-black p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <TodoList todos={todos} onComplete={completeTodo} />
        {todos.length === 0 && (
          <p className="text-center text-black mt-6">All tasks completed!</p>
        )}
      </div>
    </div>
  );
};

export default App;

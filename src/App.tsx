import "./App.css";
import React from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useLocalStorageTodos } from "../hooks/useLocalStorageTodos";

const App: React.FC = () => {
  const { todos, toggleTodo, addTodo, sortTodos } = useLocalStorageTodos();

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <TodoForm onAdd={addTodo} />
        <div className="flex justify-end mb-4">
          <button
            onClick={sortTodos}
            className="bg-gray-600 text-black px-4 py-2 rounded hover:bg-gray-700"
          >
            Sort by Status
          </button>
        </div>
        <TodoList todos={todos} onToggle={toggleTodo} />
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-6">All tasks completed or none added yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;



import React from "react";
import type { Todo } from "./todoInrerface";

// Component for rendering a single todo item
export const TodoItem: React.FC<{
  todo: Todo;
  onToggle: (id: number) => void;
}> = ({ todo, onToggle }) => (
  <li
    className={`bg-white rounded-xl shadow p-4 mb-3 flex justify-between items-center transition ${todo.done ? "opacity-50 line-through" : "hover:bg-green-50"}`}
  >
    <div>
      <h3 className="text-lg font-semibold">{todo.title}</h3>
      <p className="text-sm text-gray-600">{todo.description}</p>
    </div>
     {/* Button to toggle todo status */}
    <button
      onClick={() => onToggle(todo.id)}
      className={`ml-4 px-4 py-2 rounded text-black ${todo.done}`}
    >
      {todo.done ? "Undo" : "Done"}
    </button>
  </li>
);
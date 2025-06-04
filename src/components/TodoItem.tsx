import React from "react";
import type { Todo } from "./todoInrerface";

export const TodoItem: React.FC<{
  todo: Todo;
  onComplete: (id: number) => void;
}> = ({ todo, onComplete }) => (
  <li className="bg-white rounded-xl shadow p-4 mb-3 flex justify-between items-center hover:bg-green-50 transition">
    <div>
      <h3 className="text-lg font-semibold">{todo.title}</h3>
      <p className="text-lg text-gray-600">{todo.description}</p>
    </div>
    <button
      onClick={() => onComplete(todo.id)}
      className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Done
    </button>
  </li>
);
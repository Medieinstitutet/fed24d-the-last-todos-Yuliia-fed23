import React from "react";
import type { Todo } from "./todoInrerface";
import { TodoItem } from "./TodoItem";

// Component that maps and renders the full list of todos
export const TodoList: React.FC<{
  todos: Todo[];
  onToggle: (id: number) => void;
}> = ({ todos, onToggle }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
    ))}
  </ul>
);
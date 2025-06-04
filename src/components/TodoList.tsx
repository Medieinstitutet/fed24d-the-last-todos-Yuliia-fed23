import React from "react";
import type { Todo } from "./todoInrerface";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{
  todos: Todo[];
  onComplete: (id: number) => void;
}> = ({ todos, onComplete }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />
    ))}
  </ul>
);
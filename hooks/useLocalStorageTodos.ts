import { useEffect, useState } from "react";
import type { Todo } from "../src/components/todoInrerface";

export const useLocalStorageTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      const initial: Todo[] = [
        { id: 1, title: "Do homework", description: "Do React exercises", done: false },
        { id: 2, title: "Clean room", description: "Vacuum and dust shelves", done: false },
        { id: 3, title: "Read book", description: "Read 30 pages of novel", done: false },
      ];
      console.log('todos');
      setTodos(initial);
      localStorage.setItem("todos", JSON.stringify(initial));
    }
  }, []);

  const completeTodo = (id: number) => {
    const updated = todos.filter(t => t.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  return { todos, completeTodo };
};
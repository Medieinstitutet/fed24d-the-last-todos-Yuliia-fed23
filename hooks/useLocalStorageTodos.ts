import { useEffect, useState } from "react";
import type { Todo } from "../src/components/todoInrerface";

// Custom hook for handling todos with localStorage
export const useLocalStorageTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage or initialize default ones
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    const parsed = saved ? JSON.parse(saved) : [];
    if (parsed.length === 0) {
      const initial: Todo[] = [
        { id: 1, title: "Do homework", description: "React Exercises", done: false },
        { id: 2, title: "Clean room", description: "Vacuum and dust shelves", done: false },
        { id: 3, title: "Read book", description: "Read 30 pages of novel", done: false },
      ];
      setTodos(initial);
      localStorage.setItem("todos", JSON.stringify(initial));
    } else {
      setTodos(parsed);
    }
  }, []);

 // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 // Toggle done/undone state of a todo
  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

 // Add a new todo
  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      done: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  };
  
  // Sort todos so undone come before done
  const sortTodos = () => {
    setTodos(prev => [...prev].sort((a, b) => Number(a.done) - Number(b.done)));
  };

  return { todos, toggleTodo, addTodo, sortTodos };
};
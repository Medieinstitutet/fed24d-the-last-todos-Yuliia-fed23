import "./App.css";
import React from "react";
import { TodoItem } from "./components/TodoItem";



const App: React.FC = () => {


  // Example todo object
  const todo = {
    id: 1,
    title: "Sample Todo",
    description: "This is a sample todo item.",
    done: false
  };

  // Example onComplete handler
  const handleComplete = (id: number) => {
    // handle completion logic here
    console.log(`Todo with id ${id} completed`);
  };

  return (
     <TodoItem todo={todo} onComplete={handleComplete} />
  );
};

export default App;

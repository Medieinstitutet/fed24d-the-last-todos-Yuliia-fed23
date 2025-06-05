import React, { useState } from "react";

// Component for adding new todos
export const TodoForm: React.FC<{
  onAdd: (title: string, description: string) => void;
}> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

// Handle form submission and reset inputs
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded border-blue-500"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded border-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};
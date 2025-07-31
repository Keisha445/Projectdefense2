import React, { useState } from 'react';
import '../App.css';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="todo-input" 
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
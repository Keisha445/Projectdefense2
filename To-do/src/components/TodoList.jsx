import React from "react";
import '../App.css';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span
            onClick={() => onToggle(todo.id)}
            className={`todo-text ${todo.completed ? 'completed' : ''}`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
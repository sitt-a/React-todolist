import React from 'react';

function TodoDetailOverlay({ todo, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1>To-Do List Detail</h1>
        <h2>Task: {todo.task}</h2>
        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        <p>Priority: {todo.priority}</p>
        <p>Due Date: {todo.dueDate}</p>
        <button
          onClick={onClose}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TodoDetailOverlay;

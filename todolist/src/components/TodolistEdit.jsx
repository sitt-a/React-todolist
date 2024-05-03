import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';

const TodolistEditModal = ({ onClose, onUpdate ,id}) => {
  
  const history = useHistory();
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Fetch the task details based on the ID
    fetch(`http://localhost:3000/todos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data.task);
        setCompleted(data.completed);
        setPriority(data.priority);
        setDueDate(data.dueDate);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(true);

    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, completed, priority, dueDate }),
    })
      .then((response) => response.json())
      .then((updatedTodo) => {
        setIsUpdating(false);
        onUpdate(updatedTodo); // Call the onUpdate function passed as a prop
        onClose();
      })
      .catch((error) => {
        setIsUpdating(false);
        console.log(error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h1>Edit To-Do List Item</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <label>
            Completed:
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
          <label>
            Priority:
            <input
              type="text"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </label>
          <label>
            Due Date:
            <input
              type="text"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
          <button type="submit" disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodolistEditModal;

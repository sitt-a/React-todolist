import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodolistEditModal = ({ onClose, onUpdate, id }) => {
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
        setDueDate(data.dueDate ? new Date(data.dueDate).toLocaleDateString('en-US') : '');
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
       
        <h1 className=''>Edit To-Do List Item</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col p-4'>
          <label className='pb-2'>
            Task:
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </label>
          <label className='pb-2'>
            Completed:
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
          </div>
            <div className='flex space-x-6 py-2 px-2'>
              <div>
              <select value={priority}  onChange={(e) => setPriority(e.target.value)}>
                <option value="">Select a priority</option>
                <option value="priority 1">priority 1</option>
                <option value="priority 2">priority 2</option>
                <option value="priority 3">priority 3</option>
              </select>
            </div>
            <div>
              <label className="pb-2"> Choose Due Date:</label>

              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                className="border border-gray-300 rounded px-2 py-1 mb-2"
                required
              />
            </div>
            </div>
         <div  className="flex justify-between ">
          <button 
              className="text-white bg-[#645323] hover:bg-[#746029] focus:text-white ease-in py-1 px-8 rounded-md"
              type="submit" disabled={isUpdating}>
            {isUpdating ? 'Updating...' : 'Save'}
          </button>
         
        <button
              className="border py-1 px-6 rounded-md hover:bg-[#c9c8b4] "
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodolistEditModal;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';

const Addtask = ({ onTaskAdded, onclose }) => {
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const history = useHistory();

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = () => {
    const taskObject = {
      task: newTask,
      priority: priority,
      dueDate: dueDate,
      completed: false,
    };

    addTaskToDatabase(taskObject, onTaskAdded);

    setNewTask('');
    setPriority('');
    setDueDate('');

    history.push('/');
  };

  const addTaskToDatabase = (taskObject, onTaskAdded) => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New task added:', data);
        onTaskAdded(); // Call the onTaskAdded callback after the task is added
        onclose();
      })
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    onclose(); // Call the function passed as the onclose prop
  };

  return (
    <Draggable>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-2xl cursor-move">
          <h2 className="text-xl font-bold mb-4">Add Task</h2>
          <div>
            <label className="block mb-2">Task:</label>
            <input
              type="text"
              value={newTask}
              onChange={handleNewTaskChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2"
            />
          </div>
          <div>
            <label className="block mb-2">Priority:</label>
            <input
              type="text"
              value={priority}
              onChange={handlePriorityChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2"
            />
          </div>
          <div>
            <label className="block mb-2">Due Date:</label>
            <input
              type="text"
              value={dueDate}
              onChange={handleDueDateChange}
              className="border border-gray-300 rounded px-2 py-1 mb-2"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </Draggable>
  );
};

export default Addtask;

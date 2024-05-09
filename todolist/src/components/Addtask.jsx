import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Addtask = ({ onTaskAdded, onclose }) => {
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const history = useHistory();
  const [newTaskError, setNewTaskError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    // Check form validity whenever the required fields change
    const isValid = newTask !== '' && dueDate !== '';
    setFormValid(isValid);
  }, [newTask, priority, dueDate]);

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
    setNewTaskError(''); // Clear the error message when the task field is updated
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    setNewTaskError(''); // Clear the error message when the priority field is updated
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
    setNewTaskError(''); // Clear the error message when the due date field is updated
  };

  const handleSubmit = () => {
    if (!formValid) {
      setNewTaskError('Please fill in all required fields.');
      return;
    }

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
    setNewTaskError('');

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
    setNewTaskError(''); // Clear the error message when the form is closed
    onclose(); // Call the function passed as the onclose prop
  };

  return (
    <Draggable>
      <div className="fixed top-24 left-16 right-2 flex items-center justify-center z-50 ">
        <div className="bg-white py-4 px-10 rounded-lg shadow-2xl cursor-move">
          <h2 className="text-xl font-bold mb-4">Add Task</h2>
          {newTaskError && (
            <div className="text-red-500 mb-4">{newTaskError}</div>
          )}
          <div className="diplay-block">
            <label className="block mb-2 border-none">Task:</label>
            <input
              type="text"
              value={newTask}
              onChange={handleNewTaskChange}
              className="rounded px-2 py-1 mb-2"
              placeholder="Task name"
              required
            />
          </div>

          <div className="flex justify-around space-x-6 py-2">
            <div>
              <select value={priority} onChange={handlePriorityChange}>
                <option value="">Select a priority</option>
                <option value="priority 1">priority 1</option>
                <option value="priority 2">priority 2</option>
                <option value="priority 3">priority 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2"> Choose Due Date:</label>

              <DatePicker
                selected={dueDate}
                onChange={handleDueDateChange}
                className="border border-gray-300 rounded px-2 py-1 mb-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleSubmit}
              className="text-white bg-[#645323] hover:bg-[#746029] focus:text-white ease-in py-1 px-6 rounded-md"
              disabled={!formValid} // Disable the button when the form is invalid
            >
              Submit
            </button>

            <button
              className="border py-1 px-6 rounded-md hover:bg-[#c9c8b4] "
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Addtask;

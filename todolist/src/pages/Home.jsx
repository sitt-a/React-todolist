import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddTaskOverlay from '../components/Addtask';

function Home() {
  const [todos, setTodos] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  };

  const handleAddTaskClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  const handleTaskAdded = () => {
    fetchTodos(); // Refetch the todos after a new task is added
  };

  return (
    <div>
      <button onClick={handleAddTaskClick}>
        <i className="fas fa-plus"></i> Add Task
      </button>
      {showOverlay && (
        <div className="overlay">
          <AddTaskOverlay onTaskAdded={handleTaskAdded} onclose={handleOverlayClose}/>
      
        </div>
      )}
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.task}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

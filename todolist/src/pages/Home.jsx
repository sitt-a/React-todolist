import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddTaskOverlay from '../components/Addtask';
import { TaskContext } from './TaskContext'; // Import the TaskContext

function Home() {
  const { todos, fetchTodos, handleAddTaskClick, handleOverlayClose, handleTaskAdded } = useContext(TaskContext);

  return (
    <div>
   
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

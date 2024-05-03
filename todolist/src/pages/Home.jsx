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
          <li key={todo.id}  className='border p-2'>
            <Link to={`/todos/${todo.id}`} >
               <h2>Task: {todo.task}</h2>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Priority: {todo.priority}</p>
      <p>Due Date: {todo.dueDate}</p>
      </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

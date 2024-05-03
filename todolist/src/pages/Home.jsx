import React, { useContext ,useState,useHistory} from 'react';
import { Link } from 'react-router-dom';
import AddTaskOverlay from '../components/Addtask';
import { TaskContext } from './TaskContext'; // Import the TaskContext
import TodolistEditModal from '../components/TodolistEdit';

function Home() {
  const { todos, fetchTodos, handleAddTaskClick, handleOverlayClose, handleTaskAdded } = useContext(TaskContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
    setIsDeleting(true);
  
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchTodos()
        setIsDeleting(false);
     // Redirect to the todos list page
      })
      .catch((error) => {
        setIsDeleting(false);
        console.log(error);
      });
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleUpdateTodo = (updatedTodo) => {
  fetchTodos()
    setIsEditing(false);
  };
  return (
    <div>
   
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}  className='border p-2 m-2 rounded'>
        
        
      <h1>To-Do List Detail</h1>
      <h2>Task: {todo.task}</h2>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Priority: {todo.priority}</p>
      <p>Due Date: {todo.dueDate}</p>


      <button  key={todo.id}
      disabled={isDeleting}
      onClick={()=>handleDelete(todo.id)}
      style={{ marginTop: '1rem' }}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
   <div style={{ marginTop: '1rem' }}>
        <button onClick={handleEdit}>Edit</button>
      </div>
      {isEditing && (
        <TodolistEditModal todo={todo} onClose={handleCloseModal} onUpdate={handleUpdateTodo} id={todo.id} />
      )}
   
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

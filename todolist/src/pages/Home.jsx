import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AddTaskOverlay from '../components/Addtask';
import { TaskContext } from './TaskContext'; // Import the TaskContext
import TodolistEditModal from '../components/TodolistEdit';

function Home() {
  const { todos, fetchTodos, handleAddTaskClick, handleOverlayClose, handleTaskAdded } = useContext(TaskContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditingTodos, setIsEditingTodos] = useState({});
  const [hoveredTodoId, setHoveredTodoId] = useState(null);

  const handleDelete = (id) => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchTodos();
        setIsDeleting(false);
      })
      .catch((error) => {
        setIsDeleting(false);
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    setIsEditingTodos((prevState) => ({
      ...prevState,
      [id]: true, // Set the isEditing state for the specific todo item
    }));
  };

  const handleCloseModal = (id) => {
    setIsEditingTodos((prevState) => ({
      ...prevState,
      [id]: false, // Reset the isEditing state for the specific todo item
    }));
  };

  const handleUpdateTodo = (updatedTodo) => {
    fetchTodos();
    setIsEditingTodos((prevState) => ({
      ...prevState,
      [updatedTodo.id]: false, // Reset the isEditing state for the updated todo item
    }));
  };

  const handleMouseEnter = (id) => {
    setHoveredTodoId(id);
  };

  const handleMouseLeave = () => {
    setHoveredTodoId(null);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          isEditingTodos[todo.id] ? ( // Conditionally render the TodolistEditModal component
            <TodolistEditModal
              key={todo.id}
              todo={todo}
              onClose={() => handleCloseModal(todo.id)}
              onUpdate={handleUpdateTodo}
              id={todo.id}
            />
          ) : (
            <li
              key={todo.id}
              className="border p-2 m-4 rounded"
              onMouseEnter={() => handleMouseEnter(todo.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                paddingRight: '100px',
              }}
            >
              <h2>Task: {todo.task}</h2>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  display: hoveredTodoId === todo.id ? 'block' : 'none',
                }}
              >
                <button
                  key={todo.id}
                  disabled={isDeleting}
                  onClick={() => handleDelete(todo.id)}
                  style={{ marginRight: '0.5rem' }}
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default Home;

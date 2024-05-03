import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TodolistEditModal from '../components/TodolistEdit';

const TodolistDetail = ({ id }) => {
  const [todo, setTodo] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  
  const handleDelete = () => {
    setIsDeleting(true);
  
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setIsDeleting(false);
        history.push('/'); // Redirect to the todos list page
      })
      .catch((error) => {
        setIsDeleting(false);
        console.log(error);
      });
  };
  

  useEffect(() => {
   

    fetch(`http://localhost:3000/todos/${id}`) // Replace with the appropriate URL for your API
      .then(response => response.json())
      .then(data => setTodo(data))
      .catch(error => console.log(error));
  }, [match.params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodo(updatedTodo);
    setIsEditing(false);
  };



  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>To-Do List Detail</h1>
      <h2>Task: {todo.task}</h2>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Priority: {todo.priority}</p>
      <p>Due Date: {todo.dueDate}</p>


      <button
      disabled={isDeleting}
      onClick={handleDelete}
      style={{ marginTop: '1rem' }}
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
   <div style={{ marginTop: '1rem' }}>
        <button onClick={handleEdit}>Edit</button>
      </div>
      {isEditing && (
        <TodolistEditModal todo={todo} onClose={handleCloseModal} onUpdate={handleUpdateTodo} />
      )}
    </div>
    
  );
};

export default TodolistDetail;
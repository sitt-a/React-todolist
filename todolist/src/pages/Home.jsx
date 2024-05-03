import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AddTaskOverlay from '../components/Addtask';
import { TaskContext } from './TaskContext'; // Import the TaskContext
import TodolistEditModal from '../components/TodolistEdit';
import { Trash, Pen } from 'lucide-react';
import TodoDetailOverlay from './todolistdetail';
function Home() {
  const { todos, fetchTodos, handleAddTaskClick, handleOverlayClose, handleTaskAdded } = useContext(TaskContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditingTodos, setIsEditingTodos] = useState({});
  const [hoveredTodoId, setHoveredTodoId] = useState(null);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  // Rest of the component code...

 
  const handleDelete = (id) => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchTodos();
        setIsDeleting(false);
        setSelectedTodoId(null); 
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

  const handleTodoClick = (todo) => {
    setSelectedTodoId(todo.id);
  };

  const handleCloseDetailOverlay = () => {
    setSelectedTodoId(null);
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
              className="relative border p-4 m-4 rounded"
              onMouseEnter={() => handleMouseEnter(todo.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleTodoClick(todo)}
            >
              <h2>Task: {todo.task}</h2>
              <div
                className="absolute top-0 right-2 flex gap-2"
                style={{
                  display: hoveredTodoId === todo.id ? 'flex' : 'none',
                }}
              >
                <button
                  key={todo.id}
                  disabled={isDeleting}
                  onClick={(e) => {
                    e.stopPropagation(); // Stop the click event from propagating to the li
                    handleDelete(todo.id);
                  }}
                  className=" text-gray-300 rounded-full p-2"
                >
                  <Trash />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Stop the click event from propagating to the li
                    handleEdit(todo.id);
                  }}
                  className=" text-gray-300 rounded-full p-2"
                >
                  <Pen />
                </button>
              </div>
            </li>
          )
        ))}
      </ul>

      {selectedTodoId &&
        <TodoDetailOverlay
        todo={todos.find((todo) => todo.id === selectedTodoId)}
        onClose={handleCloseDetailOverlay}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onUpdate={handleUpdateTodo}
      />
      }
    </div>
  );
}

export default Home;

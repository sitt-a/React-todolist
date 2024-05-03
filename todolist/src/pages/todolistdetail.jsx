import React, { useState } from 'react';
import { Trash, Pen } from 'lucide-react';
import TodolistEditModal from '../components/TodolistEdit';

function TodoDetailOverlay({ todo, onClose, onDelete, onEdit, onUpdate }) {
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    setIsEditingTodo(true);
  };

  const handleCloseModal = () => {
    setIsEditingTodo(false);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete(todo.id)
      .then(() => {
        setIsDeleting(false);
        onClose();
      })
      .catch((error) => {
        setIsDeleting(false);
        console.log(error);
      });
  };

  const handleUpdateTodo = (updatedTodo) => {
    onUpdate(updatedTodo);
    setIsEditingTodo(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        {isEditingTodo ? (
          <TodolistEditModal
            todo={todo}
            onClose={handleCloseModal}
            onUpdate={handleUpdateTodo}
            id={todo?.id}
          />
        ) : (
          todo && (
            <>
              <h1>To-Do List Detail</h1>
              <h2>Task: {todo.task}</h2>
              <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
              <p>Priority: {todo.priority}</p>
              <p>Due Date: {todo.dueDate}</p>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="text-gray-300 rounded-full p-2"
                >
                  <Trash />
                </button>
                <button
                  onClick={handleEdit}
                  className="text-gray-300 rounded-full p-2"
                >
                  <Pen />
                </button>
              </div>
              <button
                onClick={onClose}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default TodoDetailOverlay;

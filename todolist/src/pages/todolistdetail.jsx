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
            <div className='p-4'>
              <h1 className='pb-2'> To-Do List Detail</h1>
              <h2  className='pb-2'>Task: {todo.task}</h2>
              <p  className='pb-2'> Completed: {todo.completed ? 'Yes' : 'No'}</p>
              <p  className='pb-2'>Priority: {todo.priority}</p>
              Due date: {todo.dueDate && new Date(todo.dueDate).toLocaleDateString('en-US')}
              <div className="absolute top-4 right-12 flex gap-2">
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="text-gray-400 rounded-full p-2"
                >
                  <Trash />
                </button>
                <button
                  onClick={handleEdit}
                  className="text-gray-400 rounded-full p-2"
                >
                  <Pen />
                </button>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={onClose}
                  className="border py-1 px-6 rounded-md hover:bg-[#c9c8b4]"
                >
                  Close
                </button>
              </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default TodoDetailOverlay;

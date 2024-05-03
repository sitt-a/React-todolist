import React, { createContext, useState, useEffect } from 'react';

const TaskContext = createContext({
  todos: [],
  fetchTodos: () => {},
  handleAddTaskClick: () => {},
  handleOverlayClose: () => {},
  handleTaskAdded: () => {},
});

const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlay2, setShowOverlay2] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTaskClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

 
  const handleAddTaskClick2 = () => {
    setShowOverlay2(true);
  };

  const handleOverlayClose2 = () => {
    setShowOverlay2(false);
  };

  const handleTaskAdded = () => {
    fetchTodos(); // Refetch the todos after a new task is added
  };

  const value = {
    todos,
    showOverlay,
    showOverlay2,
    fetchTodos,
    handleAddTaskClick,
    handleOverlayClose,
    handleAddTaskClick2,
    handleOverlayClose2,
    handleTaskAdded,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };

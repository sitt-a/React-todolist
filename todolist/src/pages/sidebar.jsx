import React, { useContext,useState,useEffect } from 'react';
import Home from './Home';
import Addtask from '../components/Addtask';
import { TaskContext } from './TaskContext'; // Import the TaskContext

const Dashboard = () => {
  const { todos,showOverlay, fetchTodos, handleAddTaskClick, handleOverlayClose, handleTaskAdded } = useContext(TaskContext);
  const [selectedLink, setSelectedLink] = useState('overview');

  useEffect(() => {
    fetchTodos(); // Call fetchTodos from the context on component mount
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <nav className="bg-gray-200 p-6 mr-6">
          <ul>
            <li
              className={`mb-4 ${selectedLink === 'overview' ? 'font-bold' : ''}`}
              onClick={() => setSelectedLink('overview')}
            >
              <button className="text-blue-600 hover:text-blue-800">
                Home
              </button>
            </li>
            <li
              className={`mb-4 ${selectedLink === 'reports' ? 'font-bold' : ''}`}
              onClick={() => setSelectedLink('reports')}
            >
              <button className="text-blue-600 hover:text-blue-800">
                Reports
              </button>
            </li>
            <li
              className={`mb-4 ${selectedLink === 'settings' ? 'font-bold' : ''}`}
              onClick={() => setSelectedLink('settings')}
            >
              <button className="text-blue-600 hover:text-blue-800">
                Settings
              </button>
            </li>
            <li className="text-black" >
              <button className="text-blue-600 hover:text-blue-800" onClick={handleAddTaskClick}>
                Add task
              </button>
              {showOverlay && (
                <div className="overlay">
                  <Addtask onTaskAdded={handleTaskAdded} onclose={handleOverlayClose} />
                </div>
              )}
            </li>
          </ul>
        </nav>

        <main className="flex-1 p-6">
          {selectedLink === 'overview' && <Home todos={todos} />} {/* Pass todos from context to Home */}
          {selectedLink === 'reports' && <ReportsContent />}
          {selectedLink === 'settings' && <SettingsContent />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

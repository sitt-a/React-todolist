import React, { useContext, useState, useEffect } from 'react';
import Home from './Home';
import Addtask from '../components/Addtask';
import { TaskContext } from './TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBars, faSearch, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Dashboard = () => {
  const {
    todos,
    showOverlay,
    showOverlay2,
    fetchTodos,
    handleAddTaskClick,
    handleOverlayClose,
    handleTaskAdded,
  } = useContext(TaskContext);
  const [selectedLink, setSelectedLink] = useState('overview');
  const [sidebarVisible, setSidebarVisible] = useState(true); // Add sidebar visibility state

  useEffect(() => {
    fetchTodos();
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="sidebar flex flex-1 ">
  <nav className="bg-[#ece4cc] ">
    <button
      className="toggle-button flex px-3 mt-5 items-center"
      onClick={toggleSidebar}
    >
      <FontAwesomeIcon
        className="justify-center items-center w-8"
        icon={faBars}
        size="1x"
      />
    </button>
    {sidebarVisible && (
      <div className="p-3">
        <ul className="items-start mr-0 pr flex flex-col">
          <li className="text-black  mt-6 flex items-center">
            <button
              className="text-[#1E1203] hover:bg-[#cac9b5] w-full ease-in pl-2 pr-36 py-2 rounded-md  active:bg-[#b8b898] flex items-center"
              onClick={handleAddTaskClick}
            >
              <span className="icon mr-4 ">
                <FontAwesomeIcon icon={faPlus} className="plus-icon" />
              </span>
              Add task
            </button>
            {showOverlay && (
              <div className="overlay">
                <Addtask
                  onTaskAdded={handleTaskAdded}
                  onclose={handleOverlayClose}
                />
              </div>
            )}
          </li>

          <li
            className={`w-full flex items-center ${
              selectedLink === 'reports' ? 'font-bold' : ''
            }`}
            onClick={() => setSelectedLink('reports')}
          >
            <button className="text-black focus:bg-[#645323] focus:text-white hover:bg-[#cac9b5] w-full ease-in pl-2 pr-40 py-2 rounded-md  active:bg-[#b8b898] flex items-center">
              <span className="icon mr-4">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              Search
            </button>
          </li>
          <li
            className="w-full flex items-center"
            onClick={() => setSelectedLink('overview')}
          >
            <button className="text-black focus:bg-[#645323] focus:text-white hover:bg-[#c9c8b4] w-full ease-in pl-2 pr-36 py-2 rounded-md flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="mr-4" />
              Home
            </button>
          </li>

          <li
            className="w-full flex items-center"
            onClick={() => setSelectedLink('settings')}
          >
            <button className="text-black focus:bg-[#645323] focus:text-white w-full hover:bg-[#c9c8b4] ease-in pl-2 pr-36 py-2 rounded-md  active:bg-[#b8b898] flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="mr-4" />
              Settings
            </button>
          </li>
        </ul>
      </div>
    )}
  </nav>

  <main className="flex-1 px-32 py-12 bg-white">
    {selectedLink === 'overview' && <Home todos={todos} />}
    {selectedLink === 'reports' && <ReportsContent />}
    {selectedLink === 'settings' && <SettingsContent />}
  </main>
</div>

    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Home from './Home'
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 400 },
  { name: 'May', value: 600 },
];

const OverviewContent = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

const ReportsContent = () => {
  return (
    <>
     <Home/>
    </>
  );
};

const SettingsContent = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      {/* Your settings content goes here */}
    </>
  );
};

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('overview');

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
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Overview
              </a>
            </li>
            <li
              className={`mb-4 ${selectedLink === 'reports' ? 'font-bold' : ''}`}
              onClick={() => setSelectedLink('reports')}
            >
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Reports
              </a>
            </li>
            <li
              className={`mb-4 ${selectedLink === 'settings' ? 'font-bold' : ''}`}
              onClick={() => setSelectedLink('settings')}
            >
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6">
          {selectedLink === 'overview' && <OverviewContent />}
          {selectedLink === 'reports' && <ReportsContent />}
          {selectedLink === 'settings' && <SettingsContent />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

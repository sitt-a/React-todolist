import React, { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
const handleSubmit = async () => {
    try {
     
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();

    const matchingUser = data.users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchingUser) {
      setUser(matchingUser);
      setErrorMessage('');
      
    } else {
      setUser(null);
      setErrorMessage('Invalid username or password');
      console.log(username)
    }
  } catch (error) {
    setErrorMessage('Error logging in. Please try again.');
  }
};


  return (
    <main className="mt-8 mb-16 flex flex-col items-center justify-center flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className=" w-3/5 p-5">
          <div className="py-10">
            <h2 className="text-gray-700 text-3xl font-bold mb-2 ">Sign in to Account</h2>
            <div className="border-2 w-10 border-gray-700 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm"></FaGoogle>
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm"></FaFacebookF>
              </a>
            </div>
            <p className="text-gray-500 my-3">or use Your username</p>
            <div className="flex flex-col items-center ">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center ">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  required
                />
              </div>
              <div className="flex w-64 mb-5 mt-2 justify-between">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password
                </a>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="border-2 text-white bg-[#a18330] hover:bg-[#8d732a] rounded-full px-12 py-2 inline-block font-semibold"
              >
                Sign in
              </button>
              {errorMessage && (
                <div className="text-red-500 text-center mt-4">{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
        <div className="signup w-2/5 text-white p-5 bg-[#a18330] rounded-r-2xl py-36 px-12 ">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up personal information and start journey with us</p>
          <a
            href="/signup"
            className="border-inline-block text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#a18330] rounded-full px-12 py-2 font-semibold"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;

// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiNormalizedotcss } from 'react-icons/si';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Dummy credentials
  const dummyEmail = 'test@example.com';
  const dummyPassword = 'password123';

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered credentials match dummy credentials
    if (email !== dummyEmail && password !== dummyPassword) {
      // Set authenticated status in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to home page
      navigate('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <SiNormalizedotcss size={100} />
            <h1 className="mb-2 text-2xl">Normal Logistics</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="email"
                placeholder="id@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to our application!</h1>
      <p>
        {user ? `Hello, ${user.name}!` : 'Please login or register to continue.'}
      </p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Welcome;
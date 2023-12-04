import React, { useState } from 'react';
import axios from 'axios';

const UserAuthentication = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e, field) => {
    setLoginData({
      ...loginData,
      [field]: e.target.value,
    });
  };

  const handleLogin = async () => {
    
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    
  };

  return (
    <div>
      <h1>User Authentication</h1>
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => handleChange(e, 'email')}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => handleChange(e, 'password')}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserAuthentication;

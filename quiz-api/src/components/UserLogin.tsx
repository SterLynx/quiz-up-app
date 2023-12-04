import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
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
    try {
      const response = await axios.get('https://cae-bookstore.herokuapp.com/login', {
        auth: {
          username: loginData.email,
          password: loginData.password,
        },
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Logged in:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
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
    </div>
  );
};

export default UserLogin;

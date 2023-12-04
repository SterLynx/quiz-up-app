import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formData
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cae-bookstore.herokuapp.com/user', formData);
      console.log('User registered:', response.data);
      
    } catch (error) {
      console.error('Registration failed:', error);
    
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange(e, 'email')}
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.first_name}
          onChange={(e) => handleChange(e, 'first_name')}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={(e) => handleChange(e, 'last_name')}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange(e, 'password')}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;

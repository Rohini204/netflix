import React, { useState } from 'react';
import './SignInForm.css';
const Regis = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signInForm ">
            <h1>Sign Up</h1>

      <form action='Subscription'>
        <input
          type="text"
          placeholder='Name'
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          id="nickname"
          placeholder='Nickname'
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Create account</button>

      </form>
        <p>Already a member? <a href="/SignIn">Login</a></p>
    </div>
  );
};

export default Regis;

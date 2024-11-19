import React, { useEffect, useState } from 'react';
import './SignInForm.css';
import axios from 'axios';
const Regis = () => {
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
  })
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3003/SignUp', { email, password });
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="signInForm ">
            <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Name'
          id="name"
          name="name"
          onChange={(e)=>{setUsername(e.target.value)}}
          required
        />

        <input
          type="text"
          id="nickname"
          placeholder='Nickname'
          name="nickname"
          onChange={(e)=>{setNickname(e.target.value)}}
          
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          onChange={(e)=>{setEmail(e.target.value)}}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          onChange={(e)=>{setPassword(e.target.value)}}
          required
        />

        <button type="submit">Create account</button>

      </form>
        <p>Already a member? <a href="/SignIn">Login</a></p>
    </div>
  );
};

export default Regis;

import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className='Sign2'>

    <div className="signInForm">
      <h1>Sign In</h1>
      <form  action='netflix'>
        <input
          type="email"
          placeholder="Email or Phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="helpLinks">
        <a href="/help">Need help?</a>
      </div>
      <div className="signupLink">
        <span>New to Netflix?</span> <a href="/SignUp">Sign up now</a>
      </div>
    </div>
          </div>
  );
};

export default SignInForm;

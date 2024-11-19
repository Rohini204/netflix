import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './SignInForm.css';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {

  const nav = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn,setIsLoggedIn]= useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    }
  })
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/SignIn', { email, password });
      localStorage.setItem('token', response.data.token);
      nav('/netflix')
            setIsLoggedIn(true);
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className='Sign2'>

    <div className="signInForm">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
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

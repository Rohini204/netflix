import React from 'react'
import './Sign.css';
import Header from '../Sanmi/Signup/Header';
import SignInForm from '../Sanmi/Signup/SignInForm';
import Footer from '../Sanmi/Signup/Footer';

const Sign = () => {
  document.body.style.backgroundColor='black';
  document.body.style.margin=0;
  document.body.style.padding=0;
  return (
    <div className='App2'>
        <Header/>
        <SignInForm/>
        <Footer/>
    </div>
  )
}

export default Sign
import React from 'react'
import './Sign.css'
import Header from '../Sanmi/Signup/Header';
import Regis from '../Sanmi/Signup/Regis';
import Footer from '../Sanmi/Signup/Footer';


const Register = () => {
  document.body.style.backgroundColor='black';
  document.body.style.margin=0;
  document.body.style.padding=0;
  return (
    <div className='App2'>
        <Header/>
        <Regis/>
        <Footer/>
    </div>
  )
}

export default Register
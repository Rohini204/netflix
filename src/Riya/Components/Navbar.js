import React from 'react'
import '../Styles/Navbar.css'
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar1'>
      
        <img src={logo} alt="" />
        <div className='navlist'>
          <label >
            <select name="English" id="lang">
              <option value="English">English</option>
            </select>
            </label>
          <label>
            <a href="/SignIn">
            <button className='btn'>Sign In</button>
            </a>
            </label>
        </div>
      
    </div>
  )
}

export default Navbar
import React from 'react'
import '../Styles/Navbar.css'
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar container'>
      
        <img src={logo} alt="" />
        <div className='navlist'>
          <label >
            <select name="English" id="lang">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            </label>
          <label><button className='btn'>Sign In</button></label>
        </div>
      
    </div>
  )
}

export default Navbar
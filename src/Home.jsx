import React, { useEffect, useState } from 'react'
import "./home.scss";

import Navbar from './Roo/Components/navbar/Navbar';
import Featured from './Roo/Components/featured/Featured';
import List2 from './Roo/Components/lists/List2';
import List3 from './Roo/Components/lists/List3';
import List from './Roo/Components/lists/List';

const Home = () => {
  document.body.style.backgroundColor='black';
  document.body.style.margin=0;
  document.body.style.padding=0;
  return (
    <div className="home">
        <Navbar/>
        <Featured/>
        <List/>
        <List2/>
        <List3/>
        
         
Lcing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  )
}

export default Home
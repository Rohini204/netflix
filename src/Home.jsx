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
  document.body.style.color='white';
  return (
    <div className="home">
        <Navbar/>
        <Featured/>
        <List/>
        <List2/>
        <List3/>
    </div>
  )
}

export default Home
import React from 'react'
import './Firstpage.css'
import Getstarted from '../Riya/Components/Getstarted';
import Enjoyontv from '../Riya/Components/Enjoyontv';
import Downloadshows from '../Riya/Components/Downloadshows';
import Childrensec from '../Riya/Components/Childrensec';
import Faq from '../Riya/Components/Faq';
import Footer2 from '../Riya/Components/Footer2';


const Firstpage = () => {
  document.body.style.margin=0;
  document.body.style.padding= 0;
  document.body.style.backgroundColor= 'black';
  document.body.style.width= '100%';
  document.body.style.color= 'rgb(214, 209, 209)';
  return (
    <div className='firstpage'>
        <Getstarted/>
        <Enjoyontv/>
        <Downloadshows/>
        <Childrensec/>
        <Faq/>
    </div>
  )
}

export default Firstpage
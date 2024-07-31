import React from 'react'
import '../Styles/Firstpage.css'
import Getstarted from '../Components/Getstarted'
import Enjoyontv from '../Components/Enjoyontv'
import Downloadshows from '../Components/Downloadshows'
import Childrensec from '../Components/Childrensec'

const Firstpage = () => {
  return (
    <div className='firstpage'>
        <Getstarted/>
        <Enjoyontv/>
        <Downloadshows/>
        <Childrensec/>
    </div>
  )
}

export default Firstpage
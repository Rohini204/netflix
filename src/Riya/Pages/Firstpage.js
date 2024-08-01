import React from 'react'
import '../Styles/Firstpage.css'
import Getstarted from '../Components/Getstarted'
import Enjoyontv from '../Components/Enjoyontv'
import Downloadshows from '../Components/Downloadshows'
import Childrensec from '../Components/Childrensec'
import Faq from '../Components/Faq'

const Firstpage = () => {
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
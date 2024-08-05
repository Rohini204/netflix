import React from 'react'
import '../Styles/Enjoyontv.css'
import tv from '../Assets/Netflix-tv.jpg'

const Enjoyontv = () => {
  return (

    <div className='enjoyontv contain'>

        <div className='insideenjoy'>
        <div className='inside2'>
            <h1 className='heading'>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>

        <div className='relative'>
        <img className='img1' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
            
        <img className='img2' src={tv} alt="" />
        </div>
        </div>
    </div>
    
  )
}

export default Enjoyontv
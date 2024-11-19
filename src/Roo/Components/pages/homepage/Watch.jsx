import React from 'react'
import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Watch = () => {
    document.body.style.margin=0;
    document.body.style.width='100%';
  return (
    <div className='watch'>
      <a href="/netflix">
        <div className='back'>
          
            <ArrowBackOutlinedIcon/>
            Home
        </div>
            </a>
        <video
        className="video"
        autoPlay
        progress
        controls
        src="https://resource.flexclip.com/templates/video/720p/movie-trailer-grand-intro.mp4?v=1.0.5.19.24" 
      />
    </div>
  )
}

export default Watch
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import ImageSlider from '../../Components/imageSlider/ImageSlider';
import "./feature.scss"
import { Link } from 'react-router-dom';

const images = [
  'https://image.tmdb.org/t/p/original/r9t9lblyPfudl0LV0Ujg1nXdKyW.jpg',
  'https://image.tmdb.org/t/p/original/ydf1CeiBLfdxiyNTpskM0802TKl.jpg',
  'https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg'
];



const Featured = () => {
 
  return (
    <div className="featured">
       
        <ImageSlider images={images} />
        <div className="info">
        {/* <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        /> */}
        <span className="desc">
        </span>
         
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon /> 
            <span>Play</span> 
          </button>
         
          <button className="more">
            <InfoIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
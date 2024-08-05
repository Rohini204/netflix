import './listitem3.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import React, { useState } from 'react';

const Listitem3 = ({ index, movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/watch?v=_OKAwz2MsJs&pp=ygUNbW92aWUgdHJhaWxlcg%3D%3D";
  return (
    <div
    className="listItem"
    style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : 'auto' }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img src={movie.Link} alt={movie.Title} />
    {isHovered && (
      <>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrowIcon className="icon" />
            <AddIcon className="icon" />
            <ThumbUpOutlinedIcon className="icon" />
            <ThumbDownOutlinedIcon className="icon" />
          </div>
          <div className="itemInfoTop">
            <span className='listtitlebox'>{movie.Title}</span>
            <span>{movie.Duration}</span>
            <span className="limit">{movie.Rating}</span>
          </div>
          <div className="desc">
            {movie.Description}
          </div>
          <div className="genre">{movie.Genre}</div>
        </div>
      </>
    )}
  </div>
);
};

export default Listitem3
import React, { useRef, useState, useEffect } from 'react'
import "./list.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from '../listitems/Listitem';
import axios from 'axios';
const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  
  useEffect(() => {
    axios.get('https://retoolapi.dev/QhTxfm/data')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const listRef = useRef();


  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10- clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
        <span className="listt">Popular Series
            <div className="wrapper">
                <ArrowBackIosIcon className='Slider left' onClick={() => handleClick("left")}           style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {movies.map((movie, index) => (
                        <Listitem key={movie.id} index={index} movie={movie} />
                    ))}
                 </div>
                <ArrowForwardIosIcon className='Slider right'    onClick={() => handleClick("right")}/>
            </div>
        </span>
    </div>
  )
}

export default List
import React, { useEffect, useState } from 'react';
import "./LikedMovies.css";
const LikedMovies = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('likedMoviess')) || [];
    setLikedMovies(movies);
  }, []);

  const handleDelete = (index) => {
    const updatedMovies = likedMovies.filter((_, i) => i !== index);
    setLikedMovies(updatedMovies);
    localStorage.setItem('likedMoviess', JSON.stringify(updatedMovies));
  };
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";

  return (
    <div className='like-body'>
      <h1 className='fav'>Favorites</h1>
      <ul className="movie-grid">
        {likedMovies.map((movie, index) => (
          <li key={index} className="movie-item">
            <img src={movie.Link} alt={movie.Title} className="movie-img" />
            <div className="movie-title">{movie.Title}</div>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedMovies;
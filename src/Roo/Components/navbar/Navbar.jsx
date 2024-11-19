import { useState } from "react";
import "./nav.scss";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span className="navbarmainLinks">
          <a style={{textDecoration:'none' , color:'white'}} href="/series">
            Series
            </a>
            </span>
          <span className="navbarmainLinks"> 
          <a style={{textDecoration:'none' , color:'white'}} href="/series">
          Movies
            </a>
            </span>
          <span> 
          <a style={{textDecoration:'none' , color:'white'}} href="/series">
          New and Popular
            </a>
            </span>
            <span> 
          <a style={{textDecoration:'none' , color:'white'}} href="/liked-movies">
          Favourites
            </a>
            </span>          
            <span> 
          <a style={{textDecoration:'none' , color:'white'}} href="/addmovies">
          Add Movies
            </a>
            </span>  
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <a href="./liked-movies" className="lll">
          <FavoriteIcon className="icon" /></a>          <img
            src="https://m.media-amazon.com/images/G/01/digital/THBY_2021_PVProfileImageCircle_256x256_Homelander_Red.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import SearchIcon from "@material-ui/icons/Search";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
function Header() {
  return (
    <div className="app__header">
      <div className="app__icons">
        <div className="header__icons header__icons--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icons">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icons">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icons">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icons">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icons">
          <PermIdentityIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        className="app__logo"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
      />
    </div>
  );
}
export default Header;

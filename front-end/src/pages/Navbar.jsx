import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Heart from "../assets/images/fav-heart.png";
import ProfileImg from "../assets/images/profile-pic.png";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  Avatar,
} from "@mui/material";
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardData from "../components/breaks/db";
import "../assets/styles/breaks/cards.css"

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(0);

  const handleFavourite = (id) => {
    CardData.map((item) => {
      if (item.id === id) {
        setIsClicked(!isClicked);
        setClickedId(item.id);
        console.log(id, isClicked, item.id, clickedId);
      }
    });
  };

  const handleSearch = () => {
    const filteredData = CardData.filter((item) =>
      Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase())
      )
    );
    console.log(filteredData);
    setSearchedData(filteredData);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch();
  };

  const searchResult =
    searchedData &&
    searchedData.map((item) => (
      <ul key={item?.id} className="box">
        <li className="card-bg-image flex flex-col justify-between">
          <span className="flex flex-row justify-between">
            {isClicked && item?.id === clickedId ? (
              <FontAwesomeIcon
                className="fav-btn-1"
                onClick={() => handleFavourite(item?.id)}
                icon={faHeart}
              />
            ) : (
              <img
                className="fav-btn"
                src={Heart}
                alt={item?.category}
                onClick={() => handleFavourite(item?.id)}
              />
            )}
            <div className="flex flex-col gap-2 text-[#A7DAFF] text-[14px]">
              <p className="duration-category text-center">{item?.duration}</p>
              <p className="duration-category text-center">{item?.category}</p>
            </div>
          </span>
          <div className="flex flex-row gap-5">
            <img src={ProfileImg} alt={item?.category} className="profileImg" />
            <p>Jessica Redman</p>
          </div>
        </li>
        <li className="single-card">{item?.description}</li>
        <li>
          <button type="button" className="add-break-btn">
            ADD BREAK
          </button>
        </li>
      </ul>
    ));
  return (
    <>
      <div>
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Avatar
              alt="Profile Picture"
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              sx={{ marginRight: "1rem" }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ marginRight: "2rem", color: "darkblue" }}
            >
              Welcome back, Ivana
            </Typography>

            {/* <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: 'black',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '0.2rem 0.5rem',
              border: '1px solid #00f',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
              marginLeft: '36px',
              marginRight: '25vw' // Add this line to push the search bar to the right
            }}
          /> */}
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleChange}
            />
            <MdNotificationsNone className="icon" size={25} color="blue" />
            <Link to="/favorites">
              <AiOutlineHeart className="icon" size={25} color="blue" />
            </Link>
            <AiOutlineInfoCircle className="icon" size={25} color="blue" />
          </Toolbar>
        </AppBar>
      </div>
      <div className="search-result text-[#fff] flex flex-row gap-10 card-container">
        {searchResult}
      </div>
    </>
  );
};

export default Navbar;

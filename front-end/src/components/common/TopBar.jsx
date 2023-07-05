import React from 'react';
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

const TopBar = ({ searchText, handleChange }) => {
  return (
      <div>
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Link to="/profile">
             <Avatar
              alt="Profile Picture"
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              sx={{ marginRight: "1rem" }}
              />
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginRight: "2rem", color: "darkblue" }}
            >
              Welcome back, User
            </Typography >
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
  )
}

export default TopBar
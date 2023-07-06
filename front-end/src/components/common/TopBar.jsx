import React, {useEffect, useState} from 'react';
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
import API from '../../services'

const TopBar = ({ searchText, handleChange }) => {

  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState({})
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async() => {
    const {data: res} = await API.getUserData()
    setUserData(res)
    setUsername(res?.username)
    return res
  }
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
              src="/assets/images/OIP.jpeg"
              sx={{ marginRight: "1rem" }}
              >{userData?.first_name?.split(' ')[0][0] + userData?.last_name?.split(' ')[0][0]}</Avatar>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginRight: "2rem", color: "darkblue" }}
            >
              Welcome back, {username}
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
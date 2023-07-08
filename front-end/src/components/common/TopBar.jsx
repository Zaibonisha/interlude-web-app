import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  InputBase,
  Avatar,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  ClickAwayListener 
} from "@mui/material";
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import API from '../../services'

const TopBar = ({ searchText, handleChange }) => {

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState({})
  const [open, setOpen] = useState(false)
  const anchorRef = React.useRef(null);


  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open])

  const handleToggle = () => {
    console.log('clicked')
    setOpen((prevOpen) => !prevOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/sign-in')
  }

  const getUser = async() => {
    const {data: res} = await API.getUserData()
    console.log(res)
    setUserData(res)
    setUsername(res?.username)
    return res
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);

  return (
      <div>
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Link>
             <Avatar
              alt="Profile Picture"
              src="/assets/images/OIP.jpeg"
              sx={{ marginRight: "1rem" }}
              ref= {anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              >{userData?.first_name?.split(' ')[0][0] + userData?.last_name?.split(' ')[0][0]}</Avatar>
            </Link>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
              sx={{zIndex: '1'}}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        // onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={() => {
                          navigate('/settings')
                        }}>Settings</MenuItem>
                        <MenuItem onClick={() => {
                          handleLogout()
                        }}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
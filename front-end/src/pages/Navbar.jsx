import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, AppBar, Toolbar, InputBase, Avatar } from '@mui/material';
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Avatar
            alt="Profile Picture"
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            sx={{ marginRight: '1rem' }}
          />
          <Typography variant="h6" component="div" sx={{ marginRight: '2rem', color: 'darkblue' }}>
            Welcome back, Ivana
          </Typography>

          <InputBase
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
          />
          <MdNotificationsNone className="icon" size={25} color="blue" />
          <Link to="/favorites">
                    <AiOutlineHeart className="icon" size={25} color="blue" />
          </Link>
          <AiOutlineInfoCircle className="icon" size={25} color="blue" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

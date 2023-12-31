import React from 'react';
import './sidebar.css';
import { FaHeartbeat } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSavedSearch, MdOutlineDashboard } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button } from '@mui/material';

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('token');
    navigate('/sign-in');
  };

  const menuItem = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard/>
    },
    {
      path: "/breaks",
      name: "Breaks",
      icon: <MdSavedSearch />
    },
    {
      path: "exercise",
      name: "Exercises",
      icon: <FaHeartbeat />
    },
    {
      path: "settings",
      name: "Settings",
      icon: <GiSettingsKnobs />
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">
            <img src="interlude-logo.png" alt="Logo" className="logo" style={{ width: '15vw' }} />
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Box component={Button} onClick={logout}>
            <LogoutIcon />
            Logout
          </Box>
        </Box>
      </div>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;


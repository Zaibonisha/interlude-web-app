import React from 'react';
import './sidebar.css';
import { FaHeartbeat } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSavedSearch, MdOutlineDashboard } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

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
        <button style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '15vw',
              marginLeft: '10px',
              marginTop: '10px'
            }}onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;


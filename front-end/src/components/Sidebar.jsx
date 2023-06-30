import React from 'react';
import './sidebar.css';
import { FaHeartbeat } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdSavedSearch, MdOutlineDashboard } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "",
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
            name: "Exercise",
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
                    <h1 className="logo"><img src="interlude-logo.png" alt="Logo" className="logo" style={{ width: '15vw',  }} /></h1>
                    
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
            </div>
            <main>
  <div>{children}</div>
</main>

        </div>
    );
};

export default Sidebar;

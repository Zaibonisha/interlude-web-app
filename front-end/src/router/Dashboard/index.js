import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar, Dashboard, Breaks, Exercise, Settings } from "../../pages";



const MainDashboard = () => {
    return (
        <Box>
                <Sidebar>
                    <Dashboard/>
                </Sidebar>
        </Box>
    )
}

export default MainDashboard;
import React, {useState} from 'react';
import Router from './router'
import {ToastContainer} from 'react-toastify'
import { ThemeProvider } from "@mui/material/styles";
import Interlude from './utils/MuiTheme'
import './App.css';

function App() {
  return (
      <div className='main-app'>
        <Router />
        <ToastContainer />
      </div>
  );
}

export default App;

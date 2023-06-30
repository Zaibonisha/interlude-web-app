import React, {useState} from 'react';
import Router from './router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@mui/material/styles";
import Interlude from './utils/MuiTheme'
import './App.css';



const App = () => {
  return (
     <div className='main-app'>
       <Router />
       <ToastContainer />
     </div>
  );
};

export default App;


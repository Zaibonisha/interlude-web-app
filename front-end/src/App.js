import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Breaks from './pages/Breaks';
import Exercise from './pages/Exercise';

import Settings from './pages/Settings';

//import Topbar from './components/Topbar';

const App = () => {
  return (
    <BrowserRouter>
     
      <Sidebar >
      <Switch>
      
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/breaks" component={Breaks} />

        <Route path="/exercise" component={Exercise} />
        
        <Route path="/settings" component={Settings} />
      </Switch>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


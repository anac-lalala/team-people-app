import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home/Home'
import Employees from './pages/Employees/Employees'
import IdEmployee from './pages/IdEmployee/IdEmployee'
import NotFound from './pages/NotFound/NotFound'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/employees/:id" component={IdEmployee} />
      <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;

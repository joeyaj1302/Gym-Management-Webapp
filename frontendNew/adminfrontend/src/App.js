import logo from './logo.svg';
import './App.css';

import Account from './Pages/Account';
import Update from './Pages/Update';
import Members from './Pages/Members';
import Trainers from './Pages/Trainers';
import Plans from './Pages/Plans';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Logout'
import Navbar from './Components/Navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const authResult = new URLSearchParams(window.location.search); 
  const id = authResult.get('id');
  const uid = id;
  console.log(uid);
  if (id!=null) {
    sessionStorage.setItem('uid',id);
  }

  return (
    <BrowserRouter>
    <Navbar id={uid} />
    <Switch>
      <Route path='/account/:uid' component={Account} />
      <Route path='/update/:uid' component={Update} />
      <Route path='/members' component={Members} />
      <Route path='/trainers' component={Trainers} />
      <Route path='/plans' component={Plans} />
      <Route path='/dashbaord' component={Dashboard} />
      <Route path='/logout' component={Logout} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;

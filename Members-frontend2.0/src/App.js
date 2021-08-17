
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Update from './Pages/Update';
import { useState, useEffect } from 'react';
function App() {
  const authResult = new URLSearchParams(window.location.search); 
  const mid = authResult.get('id');
  console.log(mid);
  

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/account/' exact component={Account} />
        <Route path='/update' component={Update} />
      </Switch>
    </Router>
  </>
  );
}

export default App;

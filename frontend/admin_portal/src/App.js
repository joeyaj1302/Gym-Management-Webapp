import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Welcome</h1>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Car App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
              {/* <a class="nav-link" href="#">Signin User</a> */}
              <Link to="/user" className="nav-link">Signin</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link" href="#">Add car data</a> */}
              <Link to="/addcar" className = "nav-link">Add car</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link" href="#">Show cars</a> */}
              <Link to="/car" className="nav-link">All cars</Link>
            </li>
            <li class="nav-item">
            {/* <a class="nav-link disabled" href="#">Delete Car</a> */}
              <Link to="/deletecar" className="nav-link">Delete car</Link>
            </li>
            </ul>
            </div>
          </nav>

      <Switch>
        <Route path = "/user" component = {Users}/>
      </Switch>
      <Switch>
        <Route path = "/car" component = {Cars}/>
      </Switch>
      <Switch>
        <Route path = "/addcar" component = {AddCars}/>
      </Switch>
      <Switch>
        <Route path = "/deletecar" component = {DeleteCar}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

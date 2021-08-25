import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home'
import Edit from './Components/Edit'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/editdetails" component = {Edit}/>
      </Switch>
     </BrowserRouter>        
    </div>
  );
}

export default App;

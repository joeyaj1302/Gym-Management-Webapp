import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home'
import Details from './Components/Details'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Link to = "/home" >Home</Link>
     
      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/details" component = {Details}/>
      </Switch>
     </BrowserRouter>        
    </div>
  );
}

export default App;

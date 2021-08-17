import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <Link to="/login" className="nav-link" Style= "color: white; font-size:larger">Login</Link>

      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        
      </Switch>
     </BrowserRouter>
    </div>
  );
}



export default App;

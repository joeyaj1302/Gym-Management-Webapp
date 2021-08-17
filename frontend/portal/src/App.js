import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
<<<<<<< HEAD
import Home from './Components/home';

=======
import Home from './Components/Home'
import Details from './Components/Details'
>>>>>>> 0db838b23f176fa40da67bcae0b73ad6e79fd876

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <BrowserRouter>
      
      <Link to="/login" className="nav-link" Style= "color: white; font-size:larger">Login</Link>

      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        
=======
     <BrowserRouter>
     <Link to = "/home" >Home</Link>
     
      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/details" component = {Details}/>
>>>>>>> 0db838b23f176fa40da67bcae0b73ad6e79fd876
      </Switch>
     </BrowserRouter>        
    </div>
  );
}



export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
<<<<<<< HEAD
import Home from './Components/Home'
import Details from './Components/Details'

=======
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
function App() {
  return (
    <div className="App">
     <BrowserRouter>
<<<<<<< HEAD
     <Link to = "/home" >Home</Link>
     
      <Switch>
        <Route path = "/login" component = {Login}/>
        <Route path = "/home" component = {Home}/>
        <Route path = "/details" component = {Details}/>
      </Switch>
     </BrowserRouter>        
=======
      
      <Link to="/login" className="nav-link" Style= "color: white; font-size:larger">Login</Link>

      <Switch>
        <Route path = "/login" component = {Login}/>
      </Switch>
     </BrowserRouter>
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
      <Link to="/login" className="nav-link" Style= "color: white; font-size:larger">Login</Link>

      <Switch>
        <Route path = "/login" component = {Login}/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;

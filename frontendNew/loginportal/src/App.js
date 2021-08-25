import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import ViewPlans from './Components/ViewPlans';

function App() {
  return (
    <div className="App">
      <br/>
      <br />
      <BrowserRouter>
      
        <Switch>
        <Route path = "/viewplans" component={ViewPlans}/>
        <Route path = "/register" component={Register}/>
        <Route path = "/login" component={Login}/>
        <Route path = "" component={Home}/>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 Style= {"color: white"}>Hello</h1>
      <br />
      <br />
      <BrowserRouter>
      <Link to = "/login" className = "btn btn-primary"> Login </Link>
        <Switch>
        <Route path = "/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

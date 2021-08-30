import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Register1 from './Components/Register1';
import Register2 from './Components/Register2';
import Register3 from './Components/Register3';
import Enquiry from './Components/Enquiry';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    <div className="App">
      <br/>
      <br />
      <BrowserRouter>
      
        <Switch>
        <Route path = "/enquiry" component={Enquiry}/>
        <Route path = "/aboutus" component={Aboutus}/>
        <Route path = "/viewplans" component={Register2}/>
        <Route path = "/register" component={Register1}/>
        <Route path = "/makepayment" component={Register3}/>
        <Route path = "/login" component={Login}/>
        <Route path = "" component={Home}/>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

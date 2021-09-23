import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './Pages/Account';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Update from './Pages/Update';
import Logout from './Pages/Logout';
import Dashboard from './Pages/Dashboard';
import Payment from './Pages/Salary';
import Members from './Pages/Members';

let tid ;
function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const[joindate, setJoindate] = useState({varOne:new Date()});
  const[gender,setGender] = useState("");
  const authResult = new URLSearchParams(window.location.search); 
  const id = authResult.get('id');
  console.log(tid);
  tid = id;
  console.log("Inside app.js");
  console.log(tid); 
  
  const goLogin = () => {
    window.location.href = 'http://localhost:3006';
  }

  //window.localStorage.setItem('id',mid);
  let url = "http://localhost:8080/getbytid/?id="+tid;
  const setUser = () => {
    axios.get(url).then((response) => {
      console.log("Inside setUser");
      const result = response.data;
      if(result.message === "success") {
          const t = result.data;
          setFname(t.tfname);
          setLname(t.tlname);
          setEmail(t.temail);
          setPassword(t.tpassword);
          setAge(t.tage);
          setAddress(t.taddress);
          setJoindate(t.tjoindate);
          setGender(t.tgender);
          console.log("Trainer is :"  + fname);
    }
    else {
    alert(result.message);
    }
  })
  }
  useEffect(() => {
    setUser()
    
  },[])
  
  if(tid!=null){
    window.sessionStorage.setItem('id',tid);
    window.sessionStorage.setItem('fname',fname);
    window.sessionStorage.setItem('lname',lname);
    window.sessionStorage.setItem('email',email);
    window.sessionStorage.setItem('password',password);
    window.sessionStorage.setItem('age',age);
    window.sessionStorage.setItem('address',address);
    window.sessionStorage.setItem('joindate', joindate);
    window.sessionStorage.setItem('gender',gender);
    window.sessionStorage.setItem('isLoggedin',true);
    
  }
  else if (id == null) {
    window.sessionStorage.setItem('isLoggedin',false);
  }

  if (sessionStorage.getItem('isLoggedin')=='true') {
    return (
    
      <Router>
        <Navbar id={tid} />
        <Switch>
        <Route path='/account' component={Account} />
          <Route path='/account/:mid' component={Account} />
          <Route path='/update/:mid' component={Update} />
          <Route path='/logout' component={Logout} />
          <Route path='/payment' component={Payment} />
          <Route path='/members' component={Members} />

        </Switch>
      </Router>
    
    );
    }
    else {
      return(
        <div>
          <h1>Login First</h1>
          <button onClick={goLogin}>Login</button>
        </div>
      )
    }
}

export default App;
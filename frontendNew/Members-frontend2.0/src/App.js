import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Update from './Pages/Update';
import Yourtrainer from './Pages/Yourtrainer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Payment from './Pages/Payment';
import Logout from './Pages/Logout';
import Feedback from './Pages/Feedback';


let mid ;
function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const[joindate, setJoindate] = useState({varOne:new Date()});
  const[gender,setGender] = useState("");
  const[tid,setTid] = useState(0);
  const[tfname, setTfname] = useState("");
  const[tlname, setTlame] = useState("");
  const[taddress, setTaddress] = useState("");
  const[temail, setTemail] = useState("");
  
  const authResult = new URLSearchParams(window.location.search); 
  const id = authResult.get('id');
  console.log(mid);
  mid = id;
  console.log("Inside app.js");
  console.log(mid); 
  //window.localStorage.setItem('id',mid);
  let url = "http://localhost:8080/getbymid/?id=" + id;
  const setUser = () => {
    axios.get(url).then((response) => {
      console.log("Inside setUser");
      const result = response.data;
      if(result.message === "success") {
          const m = result.data;
          setFname(m.mfname);
          setLname(m.mlname);
          setEmail(m.memail);
          setAge(m.mage);
          setAddress(m.maddress);
          setJoindate(m.mjoindate);
          setGender(m.mgender);
          setTid(m.trainer.tid)
          setTfname(m.trainer.tfname);
          setTlame(m.trainer.tlname)
          setTaddress(m.trainer.taddress);
          setTemail(m.trainer.temail);
          console.log("Member is :"  + m.mfname);
    }
    else {
    alert(result.message);
    }
  })
  }
  useEffect(() => {
    setUser()
    
  },[])
  
  if(id!=null){
    window.sessionStorage.setItem('mid',mid);
    window.sessionStorage.setItem('fname',fname);
    window.sessionStorage.setItem('lname',lname);
    window.sessionStorage.setItem('email',email);
    window.sessionStorage.setItem('password',password);
    window.sessionStorage.setItem('age',age);
    window.sessionStorage.setItem('address',address);
    window.sessionStorage.setItem('joindate', joindate);
    window.sessionStorage.setItem('gender',gender);
    window.sessionStorage.setItem('tid',tid);
    window.sessionStorage.setItem('tfname', tfname);
    window.sessionStorage.setItem('tlname', tlname);
    window.sessionStorage.setItem('taddress', taddress);
    window.sessionStorage.setItem('temail', temail);
    window.sessionStorage.setItem('isLoggedin',true);
    
  }

  const goLogin = () => {
    window.location.href = 'http://localhost:3006';
  }
  
  if (sessionStorage.getItem('isLoggedin')=='true') {
    return (
    
      <Router>
        <Navbar id={mid} />
        <Switch>
          <Route path='/account' component={Account} />
          <Route path='/update' component={Update} />
          <Route path='/yourtrainer' component={Yourtrainer}/>
          <Route path='/payment' component={Payment}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/feedback' component={Feedback}/>
        </Switch>
      </Router>
    
    );
  }
  else  {
    return(
      <div>
        <h1>Login First</h1>
        <button onClick={goLogin}>Login</button>
      </div>
    )
   
  }

}

export default App;
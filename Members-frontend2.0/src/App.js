import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './Pages/Account';
import Update from './Pages/Update';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  console.log("In app");
  const[id, setId] = useState(0);
  const[member,setMember] = useState({});
  const authResult = new URLSearchParams(window.location.search); 
  const mid = authResult.get('id');
  //console.log(mid);
  const url = "http://localhost:8080/getbyid/?id="+mid;
  const setUserId = () => {
    setId(mid);
  }

  const setUser = () => {
    axios.get(url).then((response) => {
      const result = response.data;
      setMember(result.data);
      if(result.message === "success") {
        console.log(result.data);
        console.log("Member is :" + member.mid);
      }
      else {
        alert(result.message);
      }
    })
  }
  
  useEffect(() => {
    setUserId();
    setUser();
  }, [])


  return (
    <>
    <Router>
      <Navbar  member = {member}/>
      <Switch>
        <Route path='/account'  exact component={Account} />
        <Route path='/update'  component={Update} />
      </Switch>
    </Router>

  </>
  );
}

export default App;

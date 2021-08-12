import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';
import React from 'react';
import * as qs from 'query-string';

const Home = (props) => {
    // const[member,setMember] = useState(undefined);
    // const history = useHistory();
    const url = "http://localhost:8080/authenticate";
    // const member  = props.data;
    // console.log(props.data);
    // const parsed = qs.parse(location.search);
    // console.log(parsed);
    //console.log(this.props.location.state); 
    return (
         
        <div className="container">
        <h1 Style= "color: green">Home Page</h1>
        <br/>
    
        <h2 Style= "color: green; font-size:larger"> This Is Our Home page</h2>
        <br/>
        
        <h2 Style= "color: green; font-size:larger">  </h2>
        <a href="/details" Style= {"color: white; font-size:large"} > Details</a>
        <div>
        

        </div>
        </div>
        
    )
}

export default Home;
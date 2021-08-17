import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';

const Home = (props) => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[member,setMember] = useState(undefined);
    const url = "http://localhost:8080/authenticaterest"
    console.log(email);

    return (
        <div className="container">
        <h1>{props.email}</h1>
        


        </div>
    )
}

export default Home;
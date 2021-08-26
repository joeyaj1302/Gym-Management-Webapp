import React from "react";
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody
} from "reactstrap";
import { Redirect } from "react-router";
import '../css/loginCSS.css';

const Register3 = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const[mobile, setMobile] = useState("");
    const[gender,setGender] = useState("");
    const history = useHistory();
    const[joindate, setJoindate] = useState({varOne:new Date()});
    const RegisterUser = () => {
        const data = new FormData();
        data.append("mfname",fname);
        data.append("mlname",lname);
        data.append("memail",email);
        data.append("mpassword",password);
        data.append("mage",age);
        data.append("maddress",address);
        data.append("mage",age);
        data.append("mmobile",mobile);
        data.append("mgender",gender);
        data.append("mjoindate",joindate);
        console.log(fname);
        console.log(email);
        const addurl = "http://localhost:8080/addnewuser";
        axios.post(addurl,data).then((response) => {
            const result = response.data;
            if (result.message === 'success') {
                alert(result.log);
                const goLogin = () => history.push('/home')
                goLogin();
                
            }
        })
    }


  return (
    <div className="container" >
      <h2>This is Part 3</h2>
        
    </div>
  );
};

export default Register3;
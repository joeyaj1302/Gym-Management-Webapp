import React from "react";
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
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

let mid;
const Register3 = () => {
    const location = useLocation();
    const history = useHistory();
    const mfname = location.state.mfname;
    const mlname = location.state.mlname;
    const memail = location.state.memail;
    const mpassword = location.state.mpassword;
    const mage = location.state.mage;
    const mgender = location.state.mgender;
    const maddress = location.state.maddress;
    const mjoindate = location.state.mjoindate;
    const mmobile = location.state.mmobile;
    const pid = location.state.pid;
    const memberimage = location.state.image;
    //console.log(location.state)
    console.log(mjoindate);

    const ConfirmPayment = () => {
      console.log(location.state);
    }
    const GoBack = () => {
      history.push('/viewplans',{
        "mfname" : mfname,
        "mlname" : mlname,
        "memail" : memail,
        "mpassword" : mpassword,
        "mage" : mage,
        "maddress" : maddress,
        "mmobile" : mmobile,
        "mgender" : mgender,
        "mjoindate" : mjoindate,
        "image" : memberimage
      })
    }
    const RegisterUser = () => {
        const data = new FormData();
        data.append("mfname",mfname);
        data.append("mlname",mlname);
        data.append("memail",memail);
        data.append("mpassword",mpassword);
        data.append("mage",mage);
        data.append("maddress",maddress);
        data.append("mage",mage);
        data.append("mmobile",mmobile);
        data.append("mgender",mgender);
        data.append("mjoindate",mjoindate);
        // data.append("pid",pid);
        console.log(mjoindate);
        console.log("In register User");
        console.log(mfname);
        console.log(mjoindate);
        const addurl = "http://localhost:8080/addnewuser?pid="+pid;
        const geturl = "http://localhost:8080/getbymemail/?email="+memail;
        axios.post(addurl,data).then((response) => {
            const result = response.data;
            console.log("In axios.post");
            console.log(result);
            if (result.message === 'success') {
                alert(result.log);
                mid = result.data.mid;
                goGet();
                // const goLogin = () => history.push('/home')
                // goLogin();
                
            }
        })
        const goGet = () => {
          axios.get(geturl).then((response) => {
            const result = response.data;
            console.log(result);
            const uploadimgurl = "http://localhost:4001/memberimages/upload/"+mid;
            const data = new FormData();
            data.append("memberimage",memberimage);
            axios.post(uploadimgurl,data).then((response) => {})
           // console.log(mid);
          })
  
        }


    }


  return (
    <div className="container" >
      <h2>This is Part 3</h2>
      <button onClick={GoBack} className="btn btn-primary">Prev</button>
      <button onClick={RegisterUser} className="btn btn-success">ConfirmPayment</button>
        
    </div>
  );
};

export default Register3;
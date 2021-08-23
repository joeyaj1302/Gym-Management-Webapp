import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect,useContext } from 'react';
import AppContext from './../Context/app-context';


let counter =  1;
let id ;
const Yourtrainer = ({match:{params:{mid}}}) =>{
    
    return (

        <div className="account">
            <div className="login-reg-panel">
               
            
            <div className ="white-panel"><br></br><h1>Your Trainer Details</h1>
                <br/><br></br>
            <div className="row"><div id ="tags">Trainer Id :</div> <div id="title"><span>{sessionStorage.getItem('tid')}</span></div></div>
            <div className="row"><div id ="tags">Name :</div> <div id="title"><span>{sessionStorage.getItem('tfname')} {sessionStorage.getItem('tlname')}</span></div></div>
            <div className="row"><div id ="tags">Email Id:</div> <div id="title"><span>{sessionStorage.getItem('temail')}</span></div></div>
            <div className="row"> <div id ="tags">Address :</div> <div id="title"><span>{sessionStorage.getItem('taddress')} </span></div></div>
            <div> </div> 
            
            
            </div>
        </div></div>



        
    )
}

export default Yourtrainer
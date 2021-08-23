import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

let counter =  1;
let id ;
const Account = ({match:{params:{tid}}}) =>{
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[age,setAge] = useState(0);
    const[address,setAddress] = useState('');
    id = mid;
    //const id = window.localStorage.getItem('id');
    const authResult = new URLSearchParams(window.location.search); 
    let url = "http://localhost:8080/getbytid/?id=";
    if (counter === 1) {
        url = url + id;
    }
    else{
        url = url + id;
    }
     
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

            console.log("Member is :"  + fname);
        }
        else {
        alert(result.message);
        }
    })
    }
    setUser();
    // if (counter == 1) {
    //     setUser();
    //     console.log("Inside If : " + counter);
    //     counter = counter + 1;
    // }
    


    console.log(mid); 

    return (
        <div className="container centerify" >
            <div className="row" Style= {"padding:10px"}>
            <br/>
            <br/>
                <div className="col-md-4"> <h4 className="nametags">Id  </h4> </div>
                <div className="col-md-4"> <h4 Style= {"color: black"}> {tid}  </h4> </div>
            </div>
            <div className="row" Style= {"padding:10px"}>
                <div className="col-md-4"> <h4 Style= {"color: black;background-color:cyan"}>Name </h4> </div>
                <div className="col-md-4">  <h4 Style= {"color: black"}> {fname}  {lname} </h4></div>
            </div>
            <div className="row" Style= {"padding:10px"}>
                <div className="col-md-4"> <h4 Style= {"color: black;background-color:cyan"}>Email </h4> </div>
                <div className="col-md-4">  <h4 Style= {"color: black"}> {email} </h4></div>
            </div>
            <div className="row" Style= {"padding:10px"}>
                <div className="col-md-4"> <h4 Style= {"color: black;background-color:cyan"}>Address </h4> </div>
                <div className="col-md-4">  <h4 Style= {"color: black"}> {address} </h4></div>
            </div>
            {/* 
            <h4 Style= {"color: black"}>Email : {email}</h4>
            <h4 Style= {"color: black"}>Address : {address}</h4> */}

            {/* <button onClick={getMember} className="btn btn-primary"> Get details</button>
            <br/>
            <br/>
            <button onClick={editDetails} className="btn btn-success"> edit details</button> */}
            
        </div>
    )
}

export default Account
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';
import React from 'react';
import * as qs from 'query-string';
import { useHistory } from "react-router-dom";


const Details = () => {
    const authResult = new URLSearchParams(window.location.search); 
    const mid = authResult.get('id');
    const[member,setMember] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[Fname,setFname] = useState('');
    const[Lname,setLname] = useState('');
    const[age,setAge] = useState('');
    const[addresses,setAddresses] = useState('');
    const history = useHistory();
    const url = "http://localhost:8080/getbyid/?id=" + mid;   
    const getMember = () => {
        axios.get(url).then((response) =>{
            const result = response.data;
            console.log(result);
            setMember(result);
            if (result.message === "success") {
                
                //console.log(result);
               console.log("Inside if ")
               console.log(member);
            }
            else {
                alert(result.error);
            }
            
        })
    }
    const home = () => history.push('/home/?id=' + mid);

    const update = () => {
        const data = new FormData();
        data.append("mfname",Fname);
        data.append("mlname",Lname);
        data.append("memail",email);
        data.append("mpassword",password);
        data.append("mage",age);
        data.append("maddress",addresses);
        const editurl = "http://localhost:8080/updatebyid/?id=" + mid;   
        axios.put(editurl,data).then((response) =>{
            const result = response.data;
            if(result.message === 'success') {
                alert("Data Updated successfully");
                home();
            }
            else {
                alert("Error updating data");

            }

        })
    }

    useEffect(() => {
        getMember()
      }, [])

    
    
    return (
        <div className="container">
            <br/>
            <br/>
            <h1 Style= {"color: white"}>Edit Details Page</h1>
            <br/>
            <table>
				<tr>
                    <td Style= {"color: white"}>First Name :</td>
                    <td><input onChange = {(e) =>{
                    setFname(e.target.value);
                    }} type = 'text' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
                <tr>
                    <td Style= {"color: white"}> Last Name :</td>
                    <td><input onChange = {(e) =>{
                    setLname(e.target.value);
                    }} type = 'text' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
				<tr>
				    <td Style= {"color: white"}>Email :</td>
                    <td><input onChange = {(e) =>{
                        setEmail(e.target.value);
                        }} type = 'email' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
                <tr>
				    <td Style= {"color: white"}>Password :</td>
                    <td><input onChange = {(e) =>{
                        setPassword(e.target.value);
                        }} type = 'password' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
                <tr>
				    <td Style= {"color: white"}>Age :</td>
                    <td><input onChange = {(e) =>{
                        setAge(e.target.value);
                        }} type = 'nummber' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
                <tr>
				    <td Style= {"color: white"}>Address :</td>
                    <td><input onChange = {(e) =>{
                        setAddresses(e.target.value);
                        }} type = 'text' className="form-control"/>
                    </td>
				</tr>
                <tr>
                    <td>
                        <br/>
                    </td>
                </tr>
			</table>
            <br/>
            <button onClick={update} className="btn btn-success"> Update Details </button>
        </div>
    )
}

export default Details;
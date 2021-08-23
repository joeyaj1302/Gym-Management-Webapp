import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

let counter =  1;
let id ;
const Update = ({match:{params:{mid}}}) => {
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[age,setAge] = useState(0);
    const[address,setAddress] = useState('');
    const name = sessionStorage.getItem('fname');
    id = mid;
    let editurl = "http://localhost:8080/updatebymid/?id="+id;
   /*if (counter === 1) {
        editurl = editurl + id;
    }
    else{
        editurl = editurl + mid;
    }*/

    const UpdateData = () => {
        const data = new FormData();
        data.append("mfname",fname);
        data.append("mlname",lname);
        data.append("memail",email);
        data.append("mpassword",password);
        data.append("mage",age);
        data.append("maddress",address);
        axios.put(editurl,data).then((response) =>{
            const result = response.data;
            if(result.message === 'success') {
                alert("Data Updated successfully");
                window.sessionStorage.setItem('fname',fname);
                window.sessionStorage.setItem('lname',lname);
                window.sessionStorage.setItem('email',email);
                window.sessionStorage.setItem('password',password);
                window.sessionStorage.setItem('age',age);
                window.sessionStorage.setItem('address',address);
            }
            else {
                alert("Error updating data");

            }

        })
    }

    console.log(mid);
    return (
        <div className="update">
            <div className="login-reg-panel">
            <div className ="white-panel"><h2>Edit Details</h2>
                <br></br>
            <table className = "updateForm">
				<tr >
                    <td>First Name :</td>
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
                    <td id ="tags"> Last Name :</td>
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
				    <td id = "tags">Email :</td>
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
				    <td  id = "tags">Password :</td>
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
				    <td>Age :</td>
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
				    <td >Address :</td>
                    <td><input onChange = {(e) =>{
                        setAddress(e.target.value);
                        }} type = 'text' className="form-control"/>
                    </td>
				</tr>
                
			</table>
            <br/>
            <button onClick={UpdateData} className="btn btn-success"> Update Details </button>

            </div>
             </div> 
            </div>
    )
}

export default Update

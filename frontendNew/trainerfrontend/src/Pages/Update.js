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
    id = mid;
    let editurl = "http://localhost:8080/updatebytid/?id=";
    if (counter === 1) {
        editurl = editurl + id;
    }
    else{
        editurl = editurl + id;
    }

    const UpdateData = () => {
        const data = new FormData();
        data.append("tfname",fname);
        data.append("tlname",lname);
        data.append("temail",email);
        data.append("tpassword",password);
        data.append("tage",age);
        data.append("taddress",address);
        axios.put(editurl,data).then((response) =>{
            const result = response.data;
            if(result.message === 'success') {
                alert("Data Updated successfully");
            }
            else {
                alert("Error updating data");

            }

        })
    }

    console.log(mid);
    return (
        <div className="container centerify" >
             <h1 className="nametags">Edit Details Page</h1>
            <br/>
            <table>
				<tr>
                    <td className="nametags">First Name :</td>
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
                    <td className="nametags"> Last Name :</td>
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
				    <td className="nametags">Email :</td>
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
				    <td className="nametags">Password :</td>
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
				    <td className="nametags">Age :</td>
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
				    <td className="nametags">Address :</td>
                    <td><input onChange = {(e) =>{
                        setAddress(e.target.value);
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
            <button onClick={UpdateData} className="btn btn-success"> Update Details </button>
            

        </div>
    )
}

export default Update

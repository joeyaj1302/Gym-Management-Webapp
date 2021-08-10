import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[member,setMember] = useState(undefined);
    const url = "http://localhost:8080/authenticaterest"
    const authenticate = () => {
        const data = new FormData();
        console.log(email);
        console.log(password);
        data.append("email",email);
        data.append("password",password);
        axios.post(url, data).then((response) => {
            const result = response.data;
            if(result.message === 'success') {
                setMember(result.data);
                alert("Successful Login!");
                
            }
            else {
                alert("Unsuccessful Login!");
            }
        })
    }

    return (
        <div className="container">
        <h1 Style= "color: white">Online Gym Management</h1>
		<table>
			<tr>	
				<td  Style= "color: white; font-size:large">Email:</td>
				<td><input onChange = {(e) =>{
                setEmail(e.target.value);
            }} type = 'text' className="form-control"/></td>
			</tr>
			<tr>	
				<td  Style= "color: white; font-size:large">Password:</td>
				<td><input onChange = {(e) =>{
                setPassword(e.target.value);
            }} type = 'password' className="form-control"/></td>
			</tr>
			<tr>	
				<td colspan="2">
					<br/>
                    <button onClick={authenticate} className="btn btn-success">Login</button>
					
				</td>
			</tr>
		</table>


        </div>
    )
}

export default Login;
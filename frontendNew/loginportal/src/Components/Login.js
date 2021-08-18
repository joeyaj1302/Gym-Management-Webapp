import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';
import { useHistory } from "react-router-dom";
import  '../Styles/Login.css';

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[member,setMember] = useState({});
    const url = "http://localhost:8080/authenticaterest";
    const history = useHistory();
    const authenticate = () => {
        const data = new FormData();
        data.append("email",email);
        data.append("password",password);
        axios.post(url,data).then((response) => {
            const result = response.data;
            if (result.message === 'success') {
                console.log(result);
                const id = result.data.mid;
                alert("Welcome!!");
                //history.push("http://localhost:3000/home/?id=2");
                window.location.href = "http://localhost:3000/?id="+id;
            }
            else {
                console.log(result);
                alert("Login again!");
            }
        })

    }

    
    return (
        <div className="container">
        <h1 Style= "color: white">Online Gym Management</h1>
        <br />
      <br />
		<table className="centerStyle">
			<tr>	
				<td  Style= "color: white; font-size:large">Email</td>
                <td> : </td>
				<td><input onChange = {(e) =>{
                setEmail(e.target.value);
            }} type = 'text' className="form-control"/></td>
			</tr>
            <td>
                <br/>
            </td>
			<tr>	
				<td  Style= "color: white; font-size:large">Password </td>
                <td> : </td>
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
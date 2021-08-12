import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import Home from './Home'
import '../App.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[member,setMember] = useState(undefined);
    const history = useHistory();
    const url = "http://localhost:8080/authenticaterest";
    // const goLogin = () => ; 
    const goLogin = () => history.push('/home');
    const authenticate = () => {
        const data = new FormData();
        console.log(email);
        console.log(password);
        data.append("email",email);
        data.append("password",password);
        axios.post(url, data).then((response) => {
            const result = response.data;
            if(result.message === 'success') {
                const m = result.data;
                setMember(result.data);
                alert("Successful Login! welcome "+ m.mfname + " " + m.mlname);   
                const goLogin = () => history.push('/home/?id=' + m.mid);
                goLogin();   

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
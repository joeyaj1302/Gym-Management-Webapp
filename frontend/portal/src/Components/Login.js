import axios from 'axios';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import Home from './Home'
import '../App.css';
import { useHistory } from "react-router-dom";
=======
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../App.css';
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[member,setMember] = useState(undefined);
<<<<<<< HEAD
    const history = useHistory();
    const url = "http://localhost:8080/authenticaterest";
    // const goLogin = () => ; 
    const goLogin = () => history.push('/home');
=======
    const url = "http://localhost:8080/authenticaterest"
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
    const authenticate = () => {
        const data = new FormData();
        console.log(email);
        console.log(password);
        data.append("email",email);
        data.append("password",password);
        axios.post(url, data).then((response) => {
            const result = response.data;
            if(result.message === 'success') {
<<<<<<< HEAD
                const m = result.data;
                setMember(result.data);
                alert("Successful Login! welcome "+ m.mfname + " " + m.mlname);   
                const goLogin = () => history.push('/home/?id=' + m.mid);
                goLogin();   

=======
                setMember(result.data);
                alert("Successful Login!");
                
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
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
<<<<<<< HEAD
                   
=======
					
>>>>>>> 0ad1c42171ac6684f8c4f901cb33d76269e91c91
				</td>
			</tr>
		</table>


        </div>
    )
}

export default Login;
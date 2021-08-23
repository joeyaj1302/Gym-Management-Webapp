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
    const[resetemail,setResetEmail] = useState('');
    const[loggedIn,setLoggedIn] = useState(false);
    const url = "http://localhost:8080/authenticaterest";
    const history = useHistory();
    const authenticate = () => {
        const data = new FormData();
        data.append("email",email);
        data.append("password",password);

        axios.post(url,data).then((response) => {
            const result = response.data;
            console.log(result.role);
            if (result.message === 'success' && result.role === 'member') {
                console.log(result);
                const id = result.data.mid;
                alert("Welcome!! Member");
                setLoggedIn(true);
                //history.push("http://localhost:3000/home/?id=2");
                window.location.href = "http://localhost:3000/?id="+id;
            }
            else if (result.message === 'success' && result.role === 'trainer') {
                console.log(result);
                const id = result.data.tid;
                alert("Welcome!! Trainer");
                setLoggedIn(true);
                //history.push("http://localhost:3000/home/?id=2");
                window.location.href = "http://localhost:3007/?id="+id;
            }
            else if (result.message === 'success' && result.role === 'admin') {
                console.log(result);
                const id = result.data.uid;
                alert("Welcome!! Admin!");
                setLoggedIn(true);
                //history.push("http://localhost:3000/home/?id=2");
                window.location.href = "http://localhost:3008/?id="+id;
            }
            else {
                console.log(result);
                alert("Login again!");
            }
        })

    }

    const reseturl =  "http://localhost:8080/forgot_password"; 
    const Reset = () => {
        const data = new FormData();
        data.append("resetemail",resetemail);
        console.log(resetemail);
        axios.post(reseturl,data).then((response) =>{
            alert("Check Your Email")
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
               <td colspan="3">
                   <br/><td >
                    <button onClick={authenticate} className="btn btn-success">Login</button></td>

                   <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Reset Password</button>
                </td>
               </td>
           </tr>
       </table>
       
        
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Reset Password</h5>   
                    </div><div><small class="form-text text-muted">Link to reset your password will be sent to the registered Email Id.  </small>
     </div>
                    <div class="modal-body" Style = {"margin-top:-20px"}>
                        <form>
                        <div class="form-group">
                            <label class="modal-header">Email :</label>
                            <input onChange={ (e)=> {
                                setResetEmail(e.target.value);
                            }} 
                            type="email" class="form-control" id="resetemail" placeholder="Enter email"></input>
                            
                        </div>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={Reset}>Send Email</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    )   
}

export default Login;
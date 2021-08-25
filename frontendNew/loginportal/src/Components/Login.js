import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';
import { useHistory } from "react-router-dom";
import  '../Styles/Login.css';
import '../css/loginCSS.css';
import ReactPlayer from 'react-player';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InstagramIcon from '@material-ui/icons/Instagram';

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
                window.location.href = "http://localhost:3009/?id="+id;
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
        

<div className="main-banner">

            {/* <video autoplay muted loop id="bg-video">
                <source controls autostart autoPlay src="videos/video1.mp4" type="video/mp4" />
            </video> */}
            <ReactPlayer 
                playing={true}
                url= 'videos/video1.mp4'
                width='100%'
                height='50%'
                controls = {false}
                loop = {true}  

            />
            <div class="video-overlay" >
         
            <div className="d-flex justify-content-center h-100">
                    <div className="cards" Style = {"margin-top : 100px"}>
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><PersonIcon></PersonIcon></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" 
                                    onChange = {(e) =>{
                                        setEmail(e.target.value);
                                    }} type = 'text' className="form-control"/>
                                    
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><VpnKeyIcon></VpnKeyIcon></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"
                                     onChange = {(e) =>{
                                        setPassword(e.target.value);
                                    }} type = 'password' className="form-control"/>
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div className="form-group">
                                    <button onClick={authenticate} className="btn float-right login_btn" Style = {"background-color: #7fc919"}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Aren't you a member yet? <Link to = "/register" > Sign Up</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#" data-toggle="modal" data-target="#exampleModal">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={Reset}>Send Email</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>

	

    )   
}

export default Login;
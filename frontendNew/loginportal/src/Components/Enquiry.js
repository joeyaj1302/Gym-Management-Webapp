import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../css/loginCSS.css';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import '../css/registerform.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import {

    Button,
    Card,

} from "reactstrap";

const Enquiry = () => {
    const [efname, setEfname] = useState("");
    const [elname, setElname] = useState("");
    const [eemail, setEemail] = useState("");
    const [emobile, setEmobile] = useState("");
    const [message, setMessage] = useState("");


    const goEnquiry = () => {
        const addurl = "http://localhost:8080/addenquiry"
        const data = new FormData();
        data.append("efname", efname);
        data.append("elname", elname);
        data.append("eemail", eemail);
        data.append("ephone", emobile);
        data.append("message", message)

        axios.post(addurl, data).then((response) => {
            const result = response.data;
            console.log(result.data);
            if (result.message === 'success') {
                alert("Message sent ! We will get back to you shortly !");
            }
        })
    }

    return (
        <div>
            <div className="container" Style="background-color:black">
            <Card Style="background-color:transparent; width : 700px; margin-left:200px">
                <div className="content-bottom">
                    <form action="#" method="post">

                        <div className="field-group">
                            <span aria-hidden="true"><AccountCircleIcon></AccountCircleIcon></span>
                            <div className="wthree-field">
                                <input type="text" name="fname" placeholder="First Name" required id="fname"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setEfname(e.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="field-group">
                            <span aria-hidden="true"><AccountCircleIcon></AccountCircleIcon></span>
                            <div className="wthree-field">
                                <input type="text" name="lname" placeholder="Last Name" required id="lname"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setElname(e.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="field-group">
                            <span aria-hidden="true"><PhoneAndroidIcon></PhoneAndroidIcon></span>
                            <div className="wthree-field">
                                <input type="text" name="emobile" placeholder="Mobile Number"
                                    onChange={(e) => {
                                        setEmobile(e.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="field-group">
                            <span aria-hidden="true"><EmailIcon></EmailIcon></span>
                            <div className="wthree-field">
                                <input type="email" name="email" placeholder="Email Id"
                                    onChange={(e) => {
                                        setEemail(e.target.value);
                                    }} />
                            </div>
                        </div>

                        <div className="field-group">
                            <span aria-hidden="true"><ChatIcon></ChatIcon></span>
                            <div className="wthree-field" Style={"height : 100px"}>
                                <input type="textarea" name="message" placeholder="Message"
                                    autoComplete="off"
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }} />
                            </div>
                        </div>


                        <div className="wthree-field">
                            <Button onClick={goEnquiry} className="btn" >Submit</Button>
                        </div>
                    </form></div></Card>
            <center> <img src="images/slide-01.jpg" Style="margin-top:-580px; width:138%; margin-left:-220px;"></img>
            </center></div>

            <table class="table table-borderless" Style="width:100%;text-align: ;">
                <thead >
                    <tr Style="background-color : #7fc919">
                        <th Style="width: 35%;">Contact Us</th>
                        <th Style="width: 30%;">Gym</th>
                        <th Style="width: 35%;">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr Style="background-color : #7fc919" >
                        <td><b>Contact No :</b> <br/>8390678530<br/>8674539261</td>
                        <td><b>Address :</b><br/> 123, central perk <br/>Maharashtra</td>
                        <td><FacebookIcon/> <InstagramIcon/> <TwitterIcon/><br/><br/><YouTubeIcon/> <EmailIcon/></td>
                        
                    </tr>
                    <tr Style="background-color : #7fc919">
                        <td><b>Email Id:</b> <br/>gym@gmail.com<br/>gymsuppo@gmail.com </td>
                        <td><b>Maps<br/>Gallery<br/>blogs</b></td>
                      
                        <td></td>
                    </tr>
                    <tr Style="background-color : #7fc919">
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Enquiry;
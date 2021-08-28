import React from "react";
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Redirect } from "react-router";
import '../css/loginCSS.css';
import WcIcon from '@material-ui/icons/Wc';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import '../css/registerform.css';
import ImageIcon from '@material-ui/icons/Image';

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Register1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const[mobile, setMobile] = useState("");
  const[gender,setGender] = useState("");
  const history = useHistory();
  const[joindate, setJoindate] = useState(new Date());
  const[image,setImage] = useState(null);
  const RegisterUser = () => {
    const goPlans = () => {history.push('/viewplans',{
      "mfname" : fname,
      "mlname" : lname,
      "memail" : email,
      "mpassword" : password,
      "mage" : age,
      "maddress" : address,
      "mmobile" : mobile,
      "mgender" : gender,
      "mjoindate" : joindate,
      "image" : image
    })
  }
  console.log(joindate);
    goPlans();
}


return (
    <div className="container" >
      <h2>Form Part 1</h2>
      <Card className="form form-group transparent" Style="background-color:transparent">
      <div className="content-bottom">
				<form action="#" method="post">

        <div className="field-group">
						<span aria-hidden="true"><AccountCircleIcon></AccountCircleIcon></span>
						<div className="wthree-field">
							<input type="text" name="fname"  placeholder="First Name" required   id="fname"
              autoComplete="off"
              onChange={(e) => { 
                  setFname(e.target.value);
              }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><AccountCircleIcon></AccountCircleIcon></span>
						<div className="wthree-field">
							<input type="text" name="lname" placeholder="Last Name" required   id="lname"
              autoComplete="off"
              onChange={(e) => { 
                  setLname(e.target.value);
              }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><PersonIcon></PersonIcon></span>
						<div className="wthree-field">
							<input type="number" name="age" placeholder="Age" required   id="age" 
              autoComplete="off"
              onChange={(e) => { 
                setAge(e.target.value);
            }}/>
						</div>
					</div>

					<div className="field-group">
						<span aria-hidden="true"><WcIcon></WcIcon></span>
						<div className="wthree-field">
							<input type="text" name="gender" placeholder="Gender" id="gender"
              autoComplete="off"
              onChange={(e) => { 
                setGender(e.target.value);
            }}/>
						</div>
					</div>

          <div className="field-group">
						<span  aria-hidden="true"><PhoneAndroidIcon></PhoneAndroidIcon></span>
						<div className="wthree-field">
							<input type="text" name="mobile" placeholder="Mobile Number"  id="mobile"
              autoComplete="off"
              onChange={(e) => { 
                setMobile(e.target.value);
            }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><HomeIcon></HomeIcon></span>
						<div className="wthree-field">
							<input type="text" name="address" placeholder="Address"  id="mobile"
              autoComplete="off"
              onChange={(e) => { 
                setAddress(e.target.value);
            }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><EmailIcon></EmailIcon></span>
						<div className="wthree-field">
							<input type="email" name="email" placeholder="Email Id"  id="email"
              onChange={(e) => { 
                setEmail(e.target.value);
            }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><VpnKeyIcon></VpnKeyIcon></span>
						<div className="wthree-field">
							<input type="password" name="password" placeholder="Password"  id="email"
               autoComplete="off"
               onChange={(e) => { 
                 setPassword(e.target.value);
             }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><DateRangeIcon></DateRangeIcon></span>
						<div className="wthree-field">
							<input type="date" name="joindate" placeholder="Join Date"  id="date"
               autoComplete="off"
               onChange={(e) => { 
                 setJoindate(e.target.value);
             }}/>
						</div>
					</div>

          <div className="field-group">
						<span aria-hidden="true"><ImageIcon></ImageIcon></span>
						<div className="wthree-field">
							<input type="file" name="image" placeholder="Upload Your Image"  id="date"
               autoComplete="off"
               onChange={(e) => { 
                 setImage(e.target.files[0]);
             }}/>
						</div>
					</div>
          
					<div className="wthree-field">
					<Button onClick={RegisterUser} className="btn" >Next</Button>
					</div>
					</form></div></Card></div>
  );
};

export default Register1;
import React from "react";
import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody
} from "reactstrap";
import { Redirect } from "react-router";
import '../css/loginCSS.css';

const Register = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const[mobile, setMobile] = useState("");
    const[gender,setGender] = useState("");
    const history = useHistory();
    const[joindate, setJoindate] = useState({varOne:new Date()});
    const RegisterUser = () => {
        const data = new FormData();
        data.append("mfname",fname);
        data.append("mlname",lname);
        data.append("memail",email);
        data.append("mpassword",password);
        data.append("mage",age);
        data.append("maddress",address);
        data.append("mage",age);
        data.append("mmobile",mobile);
        data.append("mgender",gender);
        data.append("mjoindate",joindate);
        console.log(fname);
        console.log(email);
        const addurl = "http://localhost:8080/addnewuser";
        axios.post(addurl,data).then((response) => {
            const result = response.data;
            if (result.message === 'success') {
                alert(result.log);
                const goLogin = () => history.push('/home')
                goLogin();
                
            }
        })
    }


  return (
    <div className="container" >
      <h2>This is Part 1</h2>
    <Card className="form form-group transparent">
      <CardBody>
        <form>
        <FormGroup >
            <Label for="examplePassword">First Name</Label>
            <Input
              type="text"
              name="fname"
              className="form-control"
              id="fname"
              placeholder="ex. John"
              autoComplete="off"
              onChange={(e) => { 
                  setFname(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Last name</Label>
            <Input
              type="text"
              name="lname"
              className="form-control"
              id="lname"
              placeholder="ex. Krasinki"
              autoComplete="off"
              onChange={(e) => { 
                setLname(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Age</Label>
            <Input
              type="number"
              name="age"
              className="form-control"
              id="age"
              placeholder="ex. 0"
              autoComplete="off"
              onChange={(e) => { 
                setAge(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Gender</Label>
            <Input
              type="text"
              name="gender"
              className="form-control"
              id="gender"
              placeholder="ex. M or F"
              autoComplete="off"
              onChange={(e) => { 
                setGender(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Mobile Number</Label>
            <Input
              type="text"
              name="mobile"
              className="form-control"
              id="mobile"
              placeholder="ex. 1245678765"
              autoComplete="off"
              onChange={(e) => { 
                setMobile(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input
              type="text"
              name="address"
              className="form-control"
              id="address"
              placeholder="ex. 201 Baker Street, London, Maharashtra, India"
              autoComplete="off"
              onChange={(e) => { 
                setAddress(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="ex. example@gmail.com"
              onChange={(e) => { 
                setEmail(e.target.value);
            }}
            />
            <FormText color="muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="*****"
              autoComplete="off"
              onChange={(e) => { 
                setPassword(e.target.value);
            }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Join Date</Label>
            <Input
              type="date"
              name="joindate"
              className="form-control"
              id="password"
              placeholder=""
              autoComplete="off"
              onChange={(e) => { 
                setJoindate(e.target.value);
            }}
            />
          </FormGroup>

          <FormGroup check>
          </FormGroup>
          {/* <Button color="primary" onClick = {RegisterUser}>
            Submit
          </Button> */}

          {/* <Link to="/viewplans" className = "btn btn-success">View Plans</Link> */}
          <Link to="/viewplans" class="btn btn-success">Next</Link>
        </form>
      </CardBody>
    </Card>
    </div>
  );
};

export default Register;
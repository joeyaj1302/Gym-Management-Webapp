import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../App.css';
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
import ReactPlayer from 'react-player';



const Register2 = () => {
    const[planList,setPlanList] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const[pid,setPid] = useState();
    console.log("In Register2");
    const mfname = location.state.mfname;
    const mlname = location.state.mlname;
    const memail = location.state.memail;
    const mpassword = location.state.mpassword;
    const mage = location.state.mage;
    const mgender = location.state.mgender;
    const maddress = location.state.maddress;
    const mjoindate = location.state.mjoindate;
    const mmobile = location.state.mmobile;
    console.log("In Register 2");
    console.log(mjoindate);
    const url = "http://localhost:4001";
    const getplans = () => {
      const url = "http://localhost:8080/getallplans";
        axios.get(url).then((response) =>{
            console.log(response.data);
            setPlanList(response.data.List);
            console.log(response.data.List);
        })
    }
    const MakePayment = () => {
      const goPayment = () => {
        
      }
      goPayment();
    }

    useEffect(() => {
      getplans()
    },[]);

    
  return (
   <div className="container">
      <h2>This is Part 2</h2>
    <Card className="form form-group transparent" Style="background-color:transparent">
      <CardBody>
      <div class="row justify-content-around">
       
            {planList.map((plan)=>{
                      return (
                        <div class="col-4" Style="margin-top : 40px" >
                          <div class="card cardyB" Style="width: 15rem, margin-top : 40px">
                        {plan.pname}
                        <img src={url + '/' + plan.plimage} className="image pimage-thumbnail" />
                       <div class="card-body">
                        
                    <p class="card-text"> {plan.pdesc} </p>
                    <p class="card-text"> {plan.cost} </p>
                    <Button onClick={()=>{
                      history.push('/makepayment',{
                        "mfname" : mfname,
                        "mlname" : mlname,
                        "memail" : memail,
                        "mpassword" : mpassword,
                        "mage" : mage,
                        "maddress" : maddress,
                        "mmobile" : mmobile,
                        "mgender" : mgender,
                        "mjoindate" : mjoindate,
                        "pid": plan.pid
                      })
                    }}  className="btn btn-success">Go to Payment</Button>
                    </div>
                    </div>
                  </div>
                        )
                    })}
                    </div>
         <br/><br/>
          <Link to="/register" class="btn btn-primary">Prev</Link>
          {/* <Link to="/makepayment" class="btn btn-primary">Next</Link> */}
          {/* <Button onClick={MakePayment} className="btn btn-primary">Next</Button> */}
          
      </CardBody>
    </Card>
    </div>
  );
};

export default Register2;
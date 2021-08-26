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

const Register2 = () => {
    const[planList,setPlanList] = useState([]);
    const[images,setImages] = useState();
    const url = "http://localhost:4001";
    const planUrl =  "http://localhost:8080/plans"
    console.log("HEll");
    const download = () => {
      const downloadurl = "http://127.0.0.1:4001/images/download/3";
      axios.get(downloadurl).then((response) =>{
        const result = response.data;
        console.log(result.message);
        setImages(result.data[0].filename);
        
      })
    }
    useEffect(() => {
      download()
    },[]);

  return (
    <div className="container" >
      <h2>This is Part 1</h2>
    <Card className="form form-group transparent">
      <CardBody>
        <div class="row justify-content-around">
          <div class="col-4">
          <div class="card" Style="width: 18rem;">
            <img src={url + '/' + images} className="image" />
              <div class="card-body">
                  <p class="card-text">Select this plan please!!</p>
                  <Link to="/makepayment" className="btn btn-success">Go to Payments</Link>
              </div>
          </div>
            </div>
            <div class="col-4">
              <div class="card" Style="width: 18rem;">
                <img src="images/third-trainer.jpg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <p class="card-text">Select this plan please!!</p>
                    <Link to="/makepayment" className="btn btn-success">Go to Payments</Link>
                  </div>
              </div>
            </div>
        </div>
         
        
        <div class="row justify-content-around">
        <div class="col-4">
        <div class="card" Style="width: 18rem;">
            <img src="images/third-trainer.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">Select this plan please!!</p>
                <Link to="/makepayment" className="btn btn-success">Go to Payments</Link>
            </div>
        </div>
          </div>
          <div class="col-4">
            <div class="card" Style="width: 18rem;">
              <img src="images/third-trainer.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <p class="card-text">Select this plan please!!</p>
                  <Link to="/makepayment" className="btn btn-success">Go to Payments</Link>
                </div>
            </div>
          </div>
        </div>
         


          {/* <Button color="primary" onClick = {RegisterUser}>
            Submit
          </Button> */}
          <Link to="/register" class="btn btn-primary">Prev</Link>
          <Link to="/makepayment" className = "btn btn-success">Make Payment</Link>
          <Link to="/makepayment" class="btn btn-primary">Next</Link>
      </CardBody>
    </Card>
    </div>
  );
};

export default Register2;
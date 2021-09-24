import React from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    LocationSearching,
    PhoneAndroid,
  } from "@material-ui/icons";
  import "./user.css";

  
let counter =  1;
let id ;
const Account = () =>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const[gender,setGender] = useState("");
    const[joindate, setJoindate] = useState(new Date());
    const[image,setImage] = useState(null);
    const tid = sessionStorage.getItem("id")
  
    console.log(tid);
    const geturl = "http://127.0.0.1:8080/getbytid/?id=" + tid;
    const imgurl = "http://127.0.0.1:4001/"
    console.log(geturl);
    const getTrainer = () => {
        axios.get(geturl).then((response) => {
            const result = response.data;
            console.log(result);
            if(result.message === 'success') {
                setFname(result.data.tfname);
                setLname(result.data.tlname);
                setEmail(result.data.temail);
                setAge(result.data.tage);
                setPassword(result.data.tpassword);
                setGender(result.data.tgender);
                setAddress(result.data.taddress);
                setImage(result.data.timage);
                setJoindate(result.data.tjoindate);
                console.log(fname,lname,email,age,gender,joindate);
        
            }
        })
    }
    useEffect(() => {
        getTrainer()
    },[])
    
    return (

        
<div className="user" Style="margin-left:90px">
        
<div className="userTitleContainer" >
          <h1 className="userTitle">Personal Details</h1>
        </div>
         
          <div className="userUpdate" Style=" width : 600px">
            
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
              <span className="userShowTitle">Name </span>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{fname} {' '} {lname}</span>
              </div>

              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              
              <span className="userShowTitle">Address</span>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{address}</span>
              </div>
               
              <span className="userShowTitle">Age</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{age}</span>
              </div>

                
              </div>
              <div className="userUpdateRight" Style = "margin-left: auto">
              <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg thumbnail"
                    src={imgurl+image}
                    alt={imgurl+image}
                  />
               
                </div>
                <Link to= "/update/:${tid}" >
                <Button  Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      } className="shadowify" >Update</Button>
                </Link>
                <br />
                  
              </div>
            </form>
          </div>
        </div>

        
    )
}

export default Account
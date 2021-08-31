import React from 'react';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    Pertidentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import "./user.css";
  import { useState, useEffect  } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Redirect } from "react-router";
import { useLocation } from 'react-router';
import '../css/loginCSS.css';
import { Modal, Button,  Card } from "react-bootstrap";

const UpdateTrainer = (props) =>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");
    const[gender,setGender] = useState("");
    const history = useHistory();
    const location = useLocation();
    const[joindate, setJoindate] = useState(new Date());
    const[image,setImage] = useState(null);
    const tid = sessionStorage.getItem("tid")
    if(tid!=null) {

    }
    console.log(tid);
    const geturl = "http://127.0.0.1:8080/getbytid/?id=" + tid;
    const imgurl = "http://127.0.0.1:4001/"
    console.log(geturl);
    const getMember = () => {
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
                console.log(fname,lname,email,age,gender,joindate);
        
            }
        })
    }

    const UpdateTrainer = () => {
        const data = new FormData();
        data.append("tfname",fname);
        data.append("tlname",lname);
        data.append("temail",email);
        data.append("tpassword",password);
        data.append("tage",age);
        data.append("taddress",address);
        data.append("tgender",gender);
        const updateurl = "http://localhost:8080/updatebytid/?id=" + tid;
        alert(updateurl);
        axios.put(updateurl,data).then((response) => {
            const result = response.data;
            if(result.message === 'success') {
                goGet();
            }
        });
        const goGet = () => {
          const uploadimgurl = "http://localhost:4001/trainerimages/upload/" + tid;
          const data = new FormData();
          data.append("trainerimage", image);
          axios.post(uploadimgurl, data).then((response) => {
            const result = response.data;
            if(result.message === 'success') {
              sessionStorage.removeItem("mid");
              window.location.href = "http://localhost:3008/trainers"
            }
          });
        };
    }

    useEffect(() => {
        getMember()
    },[])
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Trainer</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={imgurl+image}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{fname} {' '} {lname}</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">Trainer Account</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Harry"
                    className="userUpdateInput"
                    onChange={(e) => {
                        setFname(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Potter"
                    className="userUpdateInput"
                    onChange={(e) => {
                        setLname(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="masteroogway99@gmail.com"
                    className="userUpdateInput"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="ex. New York | Mumbai"
                    className="userUpdateInput"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="ex. 25"
                    className="userUpdateInput"
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
              <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={imgurl+image}
                    alt={imgurl+image}
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} 
                  onChange = {(e)=>{
                      setImage(e.target.files[0])
                  }} />
                </div>

                <Button  Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      } className="shadowify" onClick={UpdateTrainer}>Update</Button>
                <br />
                  <Link to="/trainers" > 
                    <Button Style={
                        " background-color : blue;height:50px; width : 200px; border-radius : 12px"
                      } className="shadowify">Go back
                      </Button>
                      </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default UpdateTrainer;
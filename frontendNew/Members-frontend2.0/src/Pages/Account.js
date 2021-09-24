import React from "react";
import {
  CalendarToday,
  LocationSearching,
  PhoneAndroid,
} from "@material-ui/icons";
import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { useLocation } from "react-router";
import { Modal, Button, Card } from "react-bootstrap";

const Update = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [tfname, setTfname] = useState("");
  const [tlname, setTlname] = useState("");
  const [pname, setPname] = useState("");
  const [joindate, setJoindate] = useState(new Date());
  const [image, setImage] = useState(null);
  const[height,setHeight] = useState(0);
  const[weight, setWeight] = useState(0);
  const[bmi, setBmi] = useState(0);
  const[fat, setFat] = useState(0);
  const[target, setTarget] = useState(0);
  const mid = sessionStorage.getItem("mid");
  if (mid != null) {
  }
  console.log(mid);
  const geturl = "http://127.0.0.1:8080/getbymid/?id=" + mid;
  const imgurl = "http://127.0.0.1:4001/";
  const healthurl = "http://127.0.0.1:4001/utilityqueries/gethealthdata/" + mid;
  console.log(geturl);
  const getMember = () => {
    axios.get(geturl).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.message === "success") {
        setFname(result.data.mfname);
        setLname(result.data.mlname);
        setEmail(result.data.memail);
        setAge(result.data.mage);
        setPassword(result.data.mpassword);
        setGender(result.data.mgender);
        setAddress(result.data.maddress);
        setJoindate(result.data.mjoindate);
        setImage(result.data.mimage);
        setTfname(result.data.trainer.tfname);
        setTlname(result.data.trainer.tlname);
        setPname(result.data.plan.pname);

        console.log(fname, lname, email, age, gender, joindate);
      }
    });
    axios.get(healthurl).then((response) => {
      const result = response.data;
      console.log(result);
      setHeight(result.data[0].h_height);
      setWeight(result.data[0].h_weight);
      setBmi(result.data[0].h_bmi);
      setTarget(result.data[0].h_targetweight);
      setFat(result.data[0].h_fatp);
    })
  };

  useEffect(() => {
    getMember();
  }, []);
  return (
    <div className="user centerifya">
      <div className="userTitleContainer">
        <h1 className="userTitle" Style="text-shadow: 2px 2px 5px grey">
          {fname} {lname}
        </h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={imgurl + image} alt="" className="thumbnail" />
            <div className="userShowTopTitle">
              <span className="userShowUsername"> @{fname}</span>
              <span className="userShowUserTitle">Gym Member</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{age}</span>
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
            <span className="userShowTitle">Trainer</span>
            <div className="userShowInfo">
              <h5>
                {tfname} {tlname}
              </h5>
            </div>
            <span className="userShowTitle">Subscribed Plan :</span>
            <div className="userShowInfo">
              <h5>{pname}</h5>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">
            <h2>Personal Information :</h2>
          </span>

          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>First Name</label>
              <h4>{fname}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Last Name</label>
              <h4>{lname}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Age</label>
              <h4>{age}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Gender</label>
              <h4>{gender}</h4>
            </div>
          </div>
          <br />
          <div className="userUpdateRight" >
          <span className="userUpdateTitle">
            <h2>Health Information :</h2>
          </span>

          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Height in cms :</label>
              <h4>{height}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Weight in kgs: </label>
              <h4>{weight}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Fat % </label>
              <h4>{fat}</h4>
            </div>
            <div className="userUpdateItem">
              <label>Target Weight in kgs: </label>
              <h4>{target}</h4>
            </div>
            <div className="userUpdateItem">
              <label>BMI </label>
              <h4>{bmi}</h4>
            </div>


          </div>
          <br />
          <br />
          <Link to="/update">
          <Button
            Style={
              " background-color : Black;height:50px; width : 200px; border-radius : 12px"
            }
            className="shadowify"
          >
            Update Details
        </Button>
      </Link>
    </div>
    </div>
        </div>
      </div>
     
  );
};

export default Update;

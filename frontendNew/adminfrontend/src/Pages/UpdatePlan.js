import React from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { useLocation } from "react-router";
import { Modal, Button, Card } from "react-bootstrap";
import "../css/loginCSS.css";

const UpdateMember = (props) => {
  const [pname, setPname] = useState("");
  const [pdesc, setPdesc] = useState("");
  const [pcost, setPcost] = useState(0);
  const [tid, setTid] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const [image, setImage] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const pid = sessionStorage.getItem("pid");
  const geturl = "http://127.0.0.1:8080/getbypid/?id=" + pid;
  const imgurl = "http://127.0.0.1:4001/";
  console.log(geturl);
  const getMember = () => {
    axios.get(geturl).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.message === "success") {
        setPname(result.data.pname);
        setPdesc(result.data.pdesc);
        setPcost(result.data.pcost);
        setTid(result.data.trainer.tid);
        setFname(result.data.trainer.tfname);
        setLname(result.data.trainer.tlname);
        setEmail(result.data.trainer.temail);
        setAddress(result.data.trainer.taddress);
        setImage(result.data.plimage);
      }
    });
  };

  const UpdatePlan = () => {
    const data = new FormData();
    data.append("pname", pname);
    data.append("pcost", pcost);
    data.append("pdesc", pdesc);
    const updateurl = "http://localhost:8080/updatebypid/?id=" + pid;
    alert(updateurl);
    axios.put(updateurl, data).then((response) => {
      const result = response.data;
      if (result.message === "success") {
        goGet();
        // window.location.href = "http://localhost:3008/members";
      }
    });
    const goGet = () => {
      const uploadimgurl = "http://localhost:4001/planimages/upload/" + pid;
      const data = new FormData();
      data.append("planimage", image);
      axios.post(uploadimgurl, data).then((response) => {
        const result = response.data;
        if (result.message === "success") {
          sessionStorage.removeItem("mid");
          window.location.href = "http://localhost:3008/members";
        }
      });
    };
  };

  useEffect(() => {
    getMember();
  }, []);
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Plan</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={imgurl + image} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{pname} </span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Plan Description</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{pdesc}</span>
            </div>
            <span className="userShowTitle">Trainer Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Gym Address : {address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Plan Name</label>
                <input
                  type="text"
                  placeholder="Anna "
                  className="userUpdateInput"
                  onChange={(e) => {
                    setPname(e.target.value);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="dfghasfghjhgfd"
                  className="userUpdateInput"
                  onChange={(e) => {
                    setPdesc(e.target.value);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Cost</label>
                <input
                  type="number"
                  placeholder="500"
                  className="userUpdateInput"
                  onChange={(e) => {
                    setPcost(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={imgurl + image}
                  alt={imgurl + image}
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <br />
              <Button
                className="shadowify"
                Style={
                  " background-color : black;height:50px; width : 200px; border-radius : 12px"
                }
                className="userUpdateButton"
                onClick={UpdatePlan}
              >
                Update
              </Button>
              <br />
              <Link to="/plans">
                <Button
                  Style={
                    " background-color : blue;height:50px; width : 200px; border-radius : 12px"
                  }
                  className="shadowify"
                >
                  Go back
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMember;

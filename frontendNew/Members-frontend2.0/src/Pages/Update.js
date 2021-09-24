import React from 'react';
import {
    CalendarToday,
    LocationSearching,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import "./user.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {  Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Button} from "react-bootstrap";


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
    const [joindate, setJoindate] = useState(new Date());
    const [image, setImage] = useState(null);
    const mid = sessionStorage.getItem("mid")
    if (mid != null) {

    }
    console.log(mid);
    const geturl = "http://127.0.0.1:8080/getbymid/?id=" + mid;
    const imgurl = "http://127.0.0.1:4001/"
    console.log(geturl);
    const getMember = () => {
        axios.get(geturl).then((response) => {
            const result = response.data;
            console.log(result);
            if (result.message === 'success') {
                setFname(result.data.mfname);
                setLname(result.data.mlname);
                setEmail(result.data.memail);
                setAge(result.data.mage);
                setPassword(result.data.mpassword);
                setGender(result.data.mgender);
                setAddress(result.data.maddress);
                setJoindate(result.data.mjoindate);
                setImage(result.data.mimage);

                console.log(fname, lname, email, age, gender, joindate);

            }
        })
    }

    const UpdateMember = () => {
        const data = new FormData();
        data.append("mfname", fname);
        data.append("mlname", lname);
        data.append("memail", email);
        data.append("mpassword", password);
        data.append("mage", age);
        data.append("maddress", address);
        data.append("mgender", gender);
        data.append("mjoindate", joindate);
        const updateurl = "http://localhost:8080/updatebymid/?id=" + mid;
        axios.put(updateurl, data).then((response) => {
            const result = response.data;
            if (result.message === 'success') {
                window.sessionStorage.setItem('id', mid);
                window.sessionStorage.setItem('fname', fname);
                window.sessionStorage.setItem('lname', lname);
                window.sessionStorage.setItem('email', email);
                window.sessionStorage.setItem('password', password);
                window.sessionStorage.setItem('age', age);
                window.sessionStorage.setItem('address', address);
                window.sessionStorage.setItem('image', image);
                goGet();

            }
        });
        const goGet = () => {
            const uploadimgurl = "http://localhost:4001/memberimages/upload/" + mid;
            const data = new FormData();
            data.append("memberimage", image);
            axios.post(uploadimgurl, data).then((response) => {
                const result = response.data;
                if (result.message === 'success') {
                    window.sessionStorage.setItem('id', mid);
                    window.sessionStorage.setItem('fname', fname);
                    window.sessionStorage.setItem('lname', lname);
                    window.sessionStorage.setItem('email', email);
                    window.sessionStorage.setItem('password', password);
                    window.sessionStorage.setItem('age', age);
                    window.sessionStorage.setItem('address', address);
                    window.sessionStorage.setItem('image', image);
                    sessionStorage.removeItem("mid");
                    alert("data updated")

                }
            });
        };
    }

    useEffect(() => {
        getMember()
    }, [])
    return (
        <div className="user" Style = "text-shadow: 2px 2px 5px grey">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit Details</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={imgurl + image}
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{fname} {' '} {lname}</span>
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
                                    placeholder={fname}
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
                                    placeholder={lname}
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
                                    placeholder={email}
                                    className="userUpdateInput"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Age</label>
                                <input
                                    type="text"
                                    placeholder={age}
                                    className="userUpdateInput"
                                    onChange={(e) => {
                                        setAge(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder={address}
                                    className="userUpdateInput"
                                    onChange={(e) => {
                                        setAddress(e.target.value);
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
                                <input type="file" id="file" style={{ display: "none" }}
                                    onChange={(e) => {
                                        setImage(e.target.files[0])
                                    }} />
                            </div>

                            <Button className="shadowify"
                                Style={
                                    " background-color : black;height:50px; width : 200px; border-radius : 12px"
                                }
                                className="userUpdateButton" onClick={UpdateMember}>Update</Button>

                            <Link to="/account" >
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

export default Update;
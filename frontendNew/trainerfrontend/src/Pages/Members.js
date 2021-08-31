import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
const Members = () => {
    const[memberList,setMemberList] = useState([]);
    const imgurl = "http://127.0.0.1:4001/";
    const url = "http://localhost:8080/getmemberbytid?id="+ sessionStorage.getItem('id');
    const getMembers = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setMemberList(response.data.List);
        })
    }

    useEffect(()=>{
        getMembers()
    },[])

    return (
        <div className="container"> 
        <br></br>       
            <h2>Members List</h2>
            {/* <button onClick={getMembers} className="btn btn-primary">Get Members </button> */}
            <table className="table table-striped table-hover">
                <thead Style = "background-color:black ; color : white">
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Payment Status</th>
                        <th>Join Date</th>
                    </tr>
                </thead>
                <tbody>
                    {memberList.map((member)=>{
                        return (
                        <tr>
                        <td>{member.mid}</td>
                        <td><img src = {imgurl+member.mimage} className="smolthumbnail" />  </td>
                        <td>{member.mfname}</td>
                        <td>{member.mlname}</td>
                        <td>{member.memail}</td>
                        <td>{member.mage}</td>
                        <td>{member.maddress}</td>
                        <td> Paid </td>
                        <td>{member.mjoindate}</td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Members;
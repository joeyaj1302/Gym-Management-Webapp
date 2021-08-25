import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import '../App.css';
import React from 'react';
import * as qs from 'query-string';
import { useHistory } from "react-router-dom";

const Home = (props) => {
    const authResult = new URLSearchParams(window.location.search); 
    const mid = authResult.get('id');
    console.log("In Home mid : "+mid);
    const[member,setMember] = useState({});
    //const[member,setMember] = useState('');
    const history = useHistory();
    const url = "http://localhost:8080/getbyid/?id="+mid;
    const getMember = () => {
        axios.get(url).then((response) =>{
            const result = response.data;
            setMember(result.data);
            if (result.message === 'success') {
                console.log("Inside if member's details are : ");
                console.log(member);
            }
            else {
                alert(result.error);
            }
            
        })
    }

    const  editDetails = () => history.push('/editdetails/?id=' + member.mid);

    
    // useEffect(() => {
    //     getMember()
    //   }, [])


    // const member  = props.data;
    // console.log(props.data);
    // const parsed = qs.parse(location.search);
    // console.log(parsed);
    //console.log(this.props.location.state); 
    return (
         
        <div className="container">
            <br/>

            <div>
            <h3 Style= {"color: white"}>Id : {member.mid}</h3>
            <h3 Style= {"color: white"}>Name : {member.mfname}</h3>
            <h3 Style= {"color: white"}>Email : {member.mlname}</h3>
            <h3 Style= {"color: white"}>Address : {member.maddress}</h3>
            
            <button onClick={getMember} className="btn btn-primary"> Get details</button>
            <br/>
            <br/>
            <button onClick={editDetails} className="btn btn-success"> edit details</button>

        </div>
        </div>
        
    )
}

export default Home;
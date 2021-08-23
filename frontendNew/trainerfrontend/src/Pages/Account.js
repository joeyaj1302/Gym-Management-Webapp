import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect,useContext } from 'react';



let counter =  1;
let id ;
const Account = () =>{
    // const[fname,setFname] = useState('');
    // const[lname,setLname] = useState('');
    // const[email,setEmail] = useState('');
    // const[password,setPassword] = useState('');
    // const[age,setAge] = useState(0);
    // const[address,setAddress] = useState('');
    // id = mid;
    // const ctx = useContext(AppContext);
    // console.log("In app context :");
    // console.log(ctx.fname +" " + ctx.lname);
    // //const id = window.localStorage.getItem('id');
    // const authResult = new URLSearchParams(window.location.search); 
    // let url = "http://localhost:8080/getbymid/?id=";
    // if (counter === 1) {
    //     url = url + id;
    // }
    // else{
    //     url = url + mid;
    // }
     
    // const setUser = () => {
    
    //     axios.get(url).then((response) => {
    //         console.log("Inside setUser");
    //         const result = response.data;
    //         if(result.message === "success") {
    //             const m = result.data;
    //             setFname(m.mfname);
    //             setLname(m.mlname);
    //             setEmail(m.memail);
    //             setPassword(m.mpassword);
    //             setAge(m.mage);
    //             setAddress(m.maddress);
    
    //             console.log("Member is :"  + fname);
    //         }
    //         else {
    //         alert(result.message);
    //         }
    //     })
    
    // }

    // if(id!== null) {
    //     setUser();
    // }


    // // if (counter == 1) {
    // //     setUser();
    // //     console.log("Inside If : " + counter);
    // //     counter = counter + 1;
    // // }
    


    // console.log(mid); 

    return (

        <div className="update">
            <div className="login-reg-panel">
               

            <div className ="white-panel"><h1>My Account</h1>
            <div className="row"><div id ="tags">Id :</div> <div id="title"><span>{sessionStorage.getItem('id')}</span></div></div>
            <div className="row"><div id ="tags">Name :</div> <div id="title"><span>{sessionStorage.getItem('fname')} {sessionStorage.getItem('lname')}</span></div></div>
            <div className="row"><div id ="tags">Email Id:</div> <div id="title"><span>{sessionStorage.getItem('email')}</span></div></div>
            <div className="row"> <div id ="tags">Address :</div> <div id="title"><span>{sessionStorage.getItem('address')} </span></div></div>
            <div className="row"> <div id ="tags">Join Date :</div> <div id="title"><span>{sessionStorage.getItem('joindate')} </span></div></div>
            <div className="row"> <div id ="tags">Age :</div> <div id="title"><span>{sessionStorage.getItem('age')} </span></div></div>
          
             <div> </div> 
            
            
            </div>
        </div></div>



        
    )
}

export default Account
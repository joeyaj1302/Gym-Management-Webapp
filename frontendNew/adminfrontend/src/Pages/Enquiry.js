import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button,  Card } from "react-bootstrap";
import '../css/loginCSS.css';
import '../css/registerform.css';



const Enquiry = () => {

    const[enquiryList,setEnquiryList] = useState([]);
    const [efname, setEfname] = useState("");
    const [elname, setEldesc] = useState("");
    const [eemail, setEemail] = useState(0);
    const [ephone, setEphone] = useState(new Date());
    const[message,setMessage] = useState(0);

    const [lgShow, setLgShow] = useState(false);

    const url = "http://localhost:8080/getallenquiries";
    const getallenquiries = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setEnquiryList(response.data.List);
        })
    }

    const doAlert = () => {
        alert('Please enter a reply !');
      }

    useEffect(()=>{
        getallenquiries();
    },[])

    return (
        <div className="container"> 
        <br></br>       
            <h2>Enquiries</h2>
            {/* <button onClick={getMembers} className="btn btn-primary">Get Members </button> */}
            <table className="table table-striped table-hover">
                <thead Style = "background-color:black ; color : white">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Contact No</th>
                        <th>Message</th>
                        <th>Reply</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiryList.map((enquiry)=>{
                        return (
                        <tr>
                        <td>{enquiry.eqid}</td>
                        <td>{enquiry.efname}</td>
                        <td>{enquiry.elname}</td>
                        <td>{enquiry.eemail}</td>
                        <td>{enquiry.ephone}</td>
                        <td>{enquiry.message}</td>
                        <td> 
                            <Button onClick = {doAlert} classname = "shadowify" Style = "background-color : black; color:white">Reply</Button> </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Enquiry;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
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

    const doAlert = (enquiry) => {
        alert("Lol");
        alert(enquiry.eemail);
        window.location.href = "https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new";
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
                            <Button classname = "shadowify" Style = "background-color : black; color:white">
                            <a href={"mailto:"+enquiry.eemail+"?subject= Reply to your Enquiry about our gym! :- "+enquiry.message}>Reply</a>  
                            </Button> </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Enquiry;
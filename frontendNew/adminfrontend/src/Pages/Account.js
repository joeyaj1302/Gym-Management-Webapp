import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
function Account(props) {
    console.log("In account :");
    const mid= props.location.memberid;
    console.log(props.location.memberid);
    return (
        <div className="update" >
           <h2>This is a new account + </h2>
        </div>
    )
}

export default Account

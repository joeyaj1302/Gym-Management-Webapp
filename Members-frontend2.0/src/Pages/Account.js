import React from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
function Account(props) {
    console.log("In account :");
    console.log(props.location.aboutProps);
    const member = props.location.aboutProps;
    console.log(member);
    return (
        <div className="update" >
           <h2>This is a new account</h2>
        </div>
    )
}

export default Account

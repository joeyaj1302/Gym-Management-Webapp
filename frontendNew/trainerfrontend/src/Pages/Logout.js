import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const history = useHistory();

    const CancelLogout = () => {
        console.log("In CancelLogout");
        history.push('/dashboard');
    }

    const DoLogout = () => {
        console.log("In DoLogout")
        let id = sessionStorage.getItem('id');
        const url = "http://localhost:8080/logouttrainer?id="+id;
        axios.get(url).then((response)=>{});
        sessionStorage.clear();
        window.location.href = "http://localhost:3006/login";
    }

    return (
        <div className="container">
            <br />
            <br />
            <h2>Are You sure you want to log out?</h2>
            <br />
            <table>
                <tr>
                    <td>
                    <button className="btn btn-warning" onClick = {CancelLogout}>Cancel</button>
                    </td>
                    <td>
                    <button className="btn btn-danger" onClick = {DoLogout}>Logout</button>
                    </td>
                </tr>

            </table>
            

        </div>
    )
}

export default Logout;
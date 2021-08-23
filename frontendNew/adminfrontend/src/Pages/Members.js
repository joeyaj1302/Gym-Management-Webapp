import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Members = () => {
    const[memberList,setMemberList] = useState([]);
    
    const url = "http://localhost:8080/getallmembers";
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
            <h2>Members List</h2>
            {/* <button onClick={getMembers} className="btn btn-primary">Get Members </button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
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
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Trainers = () => {
    const[trainerList,setTrainerList] = useState([]);
    
    const url = "http://localhost:8080/getalltrainers";
    const gettrainers = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setTrainerList(response.data.List);
        })
    }

    useEffect(()=>{
        gettrainers()
    },[])

    return (
        <div className="container">        
            <h2>Trainers List</h2>
            {/* <button onClick={gettrainers} className="btn btn-primary">Get trainers </button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Salary Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trainerList.map((trainer)=>{
                        return (
                        <tr>
                        <td>{trainer.tid}</td>
                        <td>{trainer.tfname}</td>
                        <td>{trainer.tlname}</td>
                        <td>{trainer.temail}</td>
                        <td>{trainer.tage}</td>
                        <td>{trainer.taddress}</td>
                        <td> Paid </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Trainers;
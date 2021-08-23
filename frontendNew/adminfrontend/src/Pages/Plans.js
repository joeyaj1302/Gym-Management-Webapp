import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Plans = () => {
    const[planList,setPlanList] = useState([]);
    
    const url = "http://localhost:8080/getallplans";
    const getplans = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setPlanList(response.data.List);
        })
    }

    useEffect(()=>{
        getplans()
    },[])

    return (
        <div className="container">        
            <h2>Plans List</h2>
            {/* <button onClick={getplans} className="btn btn-primary">Get plans </button> */}
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Cost</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {planList.map((plan)=>{
                        return (
                        <tr>
                        <td>{plan.pid}</td>
                        <td>{plan.pname}</td>
                        <td>{plan.pdesc}</td>
                        <td>{plan.pduration}</td>
                        <td>{plan.pcost}</td>
                        <td> <button type="button" className = "btn btn-danger">Delete</button> </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Plans;
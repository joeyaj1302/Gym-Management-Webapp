
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button,  Card } from "react-bootstrap";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import {  Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../css/loginCSS.css';

let updateurl;
const Members = () => {
    const[memberList,setMemberList] = useState([]);
    const history = useHistory();
    const[updatemid,setUpdatemid] = useState(0);
    const url = "http://localhost:8080/getallmembers";
    const getMembers = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setMemberList(response.data.List);
        })
    }

    const sortedbynameurl = "http://localhost:8080/findsortedmembers";
    const sortByName = () =>{
        axios.get(sortedbynameurl).then((response)=>{
            setMemberList(response.data.List);
        })
    }
    const sortbyjoindateurl = "http://localhost:8080/sortmembersbyjoindate";
    const sortByJoinDate = () =>{
        axios.get(sortbyjoindateurl).then((response)=>{
            setMemberList(response.data.List);
        })
    }

    const updateMember = () => {
       
    }


    useEffect(()=>{
        getMembers()
        
    },[])

    return (
        <div className="container " >  
            <br />    
             <h2 Style = "text-shadow: 2px 2px 5px grey">Members List:</h2>
             <br />  
            <table>
            <tr>
                <td>
                <Button onClick={sortByName} 
                     className="shadowify"
                    Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      }
                    >Sort By Name</Button>
                </td>
                <td></td><td></td><td></td>
                <td>
                <Button onClick={sortByName} 
                     className="shadowify"
                    Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      }
                    >Sort By JoinDate</Button> 
                     </td>
            </tr>
            </table>
            <br/>
            {/* <button onClick={getMembers} className="btn btn-primary">Get Members </button> */}
            <table className="table table-hover table-bordered shadowify" >
            <thead className="thead-dark" Style = "background-color:black">
                <tr Style={"color :white"}>
                        <th>#</th>
                        <th>Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Payment Status</th>
                        <th>Join Date</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {memberList.map((member)=>{
                        return (
                        <tr>
                        <td>{member.mid}</td>
                        <td> <img src = {"http://localhost:4001/"+member.mimage} className="thumbnail" />  </td>
                        <td>{member.mfname}</td>
                        <td>{member.mlname}</td>
                        <td>{member.memail}</td>
                        <td>{member.mage}</td>
                        <td>{member.maddress}</td>
                        <td> Paid </td>
                        <td>{member.mjoindate}</td>
                        <td>{member.mduedate}</td>
                        <td > <Button 
                            className="shadowify"
                            onClick={()=>{
                             const deleteurl = "http://localhost:8080/deletebymid/?id="+member.mid;
                             axios.delete(deleteurl).then((response)=>{
                                const result = response.data;
                                if(result.message === 'success') {
                                    alert("Member Deleted Successfully !");
                                    getMembers();
                                }
                                else {
                                    alert("Some error occurred!");
                                }
                             })
                             
                        }} Style = "background-color : white; color:red" > <DeleteRoundedIcon></DeleteRoundedIcon></Button>
                       {' '}
                       <Link to="/updatemember">  
                       <Button className="shadowify"
                       onClick={ ()=> { 
                           return(
                               sessionStorage.setItem("mid",member.mid)
                           )
                       }
                       } Style = "background-color : white; color:black" > <SettingsIcon></SettingsIcon></Button>
                       </Link>
                         </td>
                        </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            

        </div>
    )
}

export default Members;
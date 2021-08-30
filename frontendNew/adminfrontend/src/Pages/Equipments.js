import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button,  Card } from "react-bootstrap";
import "../css/loginCSS.css";
import '../css/registerform.css';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';


const Equipments = () => {

    const[equipmentList,setEquipmentList] = useState([]);
    const [ename, setEname] = useState("");
    const [edesc, setEdesc] = useState("");
    const [ecost, setEcost] = useState(0);
    const [epurchasedate, setEpurchaseDate] = useState(new Date());
    const[eqty,setEqty] = useState(0);

    const [lgShow, setLgShow] = useState(false);

    const url = "http://localhost:8080/getallequipments";
    const getequipments = () => {
        axios.get(url).then((response) =>{
            console.log(response.data);
            setEquipmentList(response.data.List);
        })
    }
    const addEquipment =() =>{
        const data = new FormData();
        data.append("ename",ename);
        data.append("edesc",edesc);
        data.append("ecost",ecost);
        data.append("epurchasedate",epurchasedate);
        data.append("eqty",eqty);
      
        const addurl = "http://localhost:8080/addequipment";
        axios.post(addurl, data).then((response)=>{
            const result = response.data;
            console.log("In axios.post");
            console.log(result.data);
            if (result.message === 'success') {
                 alert("Equipment Added Successfully !");
                 setLgShow(false);
                 getequipments();
            }
        })
    }
    useEffect(()=>{
        getequipments();
    },[])

    return (
        <div className="container" > 
            <br/>       
            <h2 Style = "text-shadow: 2px 2px 5px grey">Equipments List :</h2>
            <br/>
            {/* <button onClick={gettrainers} className="btn btn-primary">Get trainers </button> */}
            <table className="table table-hover table-bordered shadowify">
            <thead className="thead-dark" Style="background-color:black">
            <tr Style={"color :white"}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cost</th>
                        <th>Purchase Date</th>
                        <th>Quantity</th>
                        <th>Vendor's Name</th>
                        <th>Vendor's Site</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {equipmentList.map((equipment)=>{
                        return (
                        <tr>
                        <td>{equipment.eid}</td>
                        <td>{equipment.ename}</td>
                        <td>{equipment.edesc}</td>
                        <td>{equipment.ecost}</td>
                        <td>{equipment.epurchasedate}</td>
                        <td>{equipment.eqty}</td>
                        <td>{equipment.vendorname} {' '} 
                        
                        </td>
                        <td>
                        <Button className="btn btn-success shadowify" Style = "background-color : black; color:red">
                            <a  href="https://www.amazon.in/s?k=gym+equipment&crid=W59XH0G95Y24&sprefix=gym+eq%2Caps%2C275&ref=nb_sb_ss_ts-doa-p_3_6">
                            <LaunchRoundedIcon ></LaunchRoundedIcon>
                            </a>
                        </Button>
                        </td>
                        
                        </tr>
                        )
                    })}
                    </tbody>
            </table>
            <br />
            <div className="centerify">
            <Button className ="shadowify" onClick={() => setLgShow(true) } Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      }>Add Equipment</Button>
            </div>
					
					
					
            <Modal 
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header Style="background-color:black" closeButton>
                <Modal.Title  id="example-modal-sizes-title-lg" Style="color: #7fc919; ">
                    Add Plan
                </Modal.Title>
                </Modal.Header>
                <Modal.Body Style="background-color:black">

            <Card className="form form-group " Style="background-color:black">
            <div className="content-bottom">
                        <form action="#" method="post">

                    <div className="field-group">
						<span aria-hidden="true"><FitnessCenterIcon></FitnessCenterIcon></span>
						<div className="wthree-field">
							<input type="text" name="ename"  placeholder="Equipment Name" required 
                            autoComplete="off"
                            onChange={(e) => { setEname(e.target.value);}}/>
                         </div>
					</div>

                    <div className="field-group">
						<span aria-hidden="true"><DescriptionIcon></DescriptionIcon></span>
						<div className="wthree-field">
							<input type="text" name="edesc" placeholder="Equipment Description"   
                            autoComplete="off"
                            onChange={(e) => {  setEdesc(e.target.value); }}/>
						</div>
					</div>

			        <div className="field-group">
						<span aria-hidden="true"><MonetizationOnIcon></MonetizationOnIcon></span>
						<div className="wthree-field">
							<input type="number" name="ecost" placeholder="Cost" 
                                autoComplete="off"
                                onChange={(e) => { setEcost(e.target.value); }}/>
						</div>
					</div>
                    <div className="field-group">
						<span aria-hidden="true"><HourglassEmptyIcon></HourglassEmptyIcon></span>
						<div className="wthree-field">
							<input type="date" name="epurchasedate" placeholder="Purchase Date"
                                    autoComplete="off"
                                    onChange={(e) => { setEpurchaseDate(e.target.value);}}/>
                        </div>
					</div>
                    <div className="field-group">
						<span aria-hidden="true"><MonetizationOnIcon></MonetizationOnIcon></span>
						<div className="wthree-field">
							<input type="number" name="eqty" placeholder="Quantity"
                                autoComplete="off"
                                onChange={(e) => { setEqty(e.target.value); }}/>
						</div>
					</div>
                    

          
					<div className="centerify">
					<Button onClick={addEquipment}  Style={
                        " background-color : black;height:50px; width : 200px; border-radius : 12px"
                      }>Add</Button>
					</div>
					</form></div></Card>
        </Modal.Body>
      </Modal>
                
            

        </div>
    )
}

export default Equipments;
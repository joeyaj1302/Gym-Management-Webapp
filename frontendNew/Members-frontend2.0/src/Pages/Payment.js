import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card } from "react-bootstrap";
import '../CSS/loginCSS.css';
import '../CSS/registerform.css';
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import {  Link } from 'react-router-dom';
const Payments = () => {
  const [pid, setPid] = useState(0);
  const [pstatus, setPstatus] = useState("");
  const [pamount, setPamount] = useState(0);
  const [pdate, setPdate] = useState(new Date());
  const [paymentList, setPaymentList] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const mid = sessionStorage.getItem("mid");
  const url = "http://localhost:8080/getpaymentsbymid/?id=" + mid ;
  const getpayments = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setPaymentList(response.data.List);
      console.log(paymentList);
    });
  };
  const addPayment = () => {
    const data = new FormData();
    data.append("pid", pid);
    data.append("pstatus", pstatus);
    data.append("pamount", pamount);
    data.append("pdate", pdate);

    const addurl = "http://localhost:8080/addequipment";
    axios.post(addurl, data).then((response) => {
      const result = response.data;
      console.log("In axios.post");
      console.log(result.data);
      if (result.message === "success") {
        alert("Equipment Added Successfully !");
        setLgShow(false);
        getpayments();
      }
    });
  };
  useEffect(() => {
    getpayments();
  }, []);

  return (
    <div className="container">
        <br />
      <h2>Payments List :</h2>
      <br />
      {/* <button onClick={gettrainers} className="btn btn-primary">Get trainers </button> */}
      <table className="table  table-hover table-bordered" >
            <thead className="thead-dark" Style = "background-color:black">
                <tr Style={"color :white"}>
            <th>ID</th>
            <th>Image</th>
            <th>Member Name</th>
            <th>Plan Name</th>
            <th>Due Date</th>
            <th>Payment Date</th>
            <th>Payment amount</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentList.map((payment) => {
            return (
              <tr>
                <td>{payment.pid}</td>
                <td> <img src = {"http://localhost:4001/"+ payment.member.mimage} className="thumbnail" />  </td>
                <td>{payment.member.mfname}  {payment.member.mlname}</td>
                <td>{payment.member.plan.pname}</td>
                <td>{payment.pduedate}</td>
                <td>{payment.pdate}</td>
                <td>{payment.pamount}</td>
                <td>{payment.pstatus.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="centerifya">
        <Button
          onClick={() => setLgShow(true)}
          Style={
            " background-color : black;height:50px; width : 200px; border-radius : 30px"
          }
        >
          Add Payment
        </Button>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header Style="background-color:black" closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            Style="color: #7fc919; "
          >
            Add Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body Style="background-color:black">
          <Card className="form form-group " Style="background-color:black">
            <div className="content-bottom">
              <form action="#" method="post">
                <div className="field-group">
                  <span aria-hidden="true">
                    <FitnessCenterIcon></FitnessCenterIcon>
                  </span>
                  <div className="wthree-field" Style="background-color:black">
                    <input
                      type="text"
                      name="pid"
                      placeholder="Full Member name "
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setPid(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <DescriptionIcon></DescriptionIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="pstatus"
                      placeholder="Type of Payment"
                      autoComplete="off"
                      onChange={(e) => {
                        setPstatus(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <MonetizationOnIcon></MonetizationOnIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="number"
                      name="pamount"
                      placeholder="Amount"
                      autoComplete="off"
                      onChange={(e) => {
                        setPamount(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="field-group">
                  <span aria-hidden="true">
                    <HourglassEmptyIcon></HourglassEmptyIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="number"
                      name="pdate"
                      placeholder="Debit Card number"
                      autoComplete="off"
                      onChange={(e) => {
                        setPdate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="wthree-field">
                  <Link to= "/payments" >
                  <Button onClick={addPayment} className="btn">
                    Add Payment
                  </Button>
                  </Link>
                 
                </div>
              </form>
            </div>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Payments;

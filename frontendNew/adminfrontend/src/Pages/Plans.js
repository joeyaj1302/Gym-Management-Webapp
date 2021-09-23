
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card } from "react-bootstrap";
import "../css/loginCSS.css";
import PersonIcon from "@material-ui/icons/Person";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import "../css/registerform.css";
import { useHistory } from "react-router-dom";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import {  Link } from "react-router-dom";

let pid;
const Plans = () => {
  const [pname, setPname] = useState("");
  const [pdesc, setPdesc] = useState("");
  const [pduration, setPduration] = useState(0);
  const [pcost, setPcost] = useState(0);
  const [planimage, setImage] = useState(null);
  const [tid, setTid] = useState(0);
  const history = useHistory();
  const [trainerList, setTrainerList] = useState([]);

  const [planList, setPlanList] = useState([]);

  const [lgShow, setLgShow] = useState(false);
  const url = "http://127.0.0.1:4001/utilityqueries/totmembersinplan";
  const geturl = "http://localhost:8080/findplanbyname";

  const getplans = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setPlanList(response.data.data);
      console.log(planList);
    });
  };

  const trainerurl = "http://localhost:8080/getalltrainers";
  const gettrainers = () => {
    axios.get(trainerurl).then((response) => {
      console.log(response.data.List);
      setTrainerList(response.data.List);
    });
  };

  const addPlan = () => {
    console.log("inside addpalan  " + tid);
    const addurl = "http://localhost:8080/addplan?tid=" + tid;
    const data = new FormData();
    data.append("pname", pname);
    data.append("pdesc", pdesc);
    data.append("pduration", pduration);
    data.append("pcost", pcost);

    axios.post(addurl, data).then((response) => {
      const result = response.data;
      console.log("In axios.post");
      console.log(result.data);
      if (result.message === "success") {
        pid = result.data.pid;
        alert("Plan Added Successfully !");
        goGet();
      }
    });
    const goGet = () => {
      const uploadimgurl = "http://localhost:4001/planimages/upload/" + pid;
      const data = new FormData();
      data.append("planimage", planimage);
      axios.post(uploadimgurl, data).then((response) => {});
      getplans();
      setLgShow(false);
    };
    const findtotmembers = () => {};
  };

  useEffect(() => {
    getplans();
    gettrainers();
  }, []);

  const setTrainerId = (e) => {
    setTid(e.target.value);
  };

  return (
    <div className="container">
      <br />
      <h2 Style="text-shadow: 2px 2px 5px grey">Plans List</h2>
      <br />
      {/* <button onClick={getplans} className="btn btn-primary">Get plans </button> */}
      <table className="table table-hover table-bordered shadowify">
        <thead className="thead-dark" Style="background-color:black">
          <tr Style={"color :white"}>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Member Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {planList.map((plan) => {
            return (
              <tr>
                <td>{plan.pid}</td>
                <td>{plan.pname}</td>
                <td>{plan.pdesc}</td>
                <td>{plan.pcost}</td>
                <td>{plan.count}</td>
                <td>
                  {" "}
                  <Button
                    className="shadowify"
                    onClick={() => {
                      const deleteurl =
                        "http://localhost:8080/deletebypid/?id=" + plan.pid;
                      axios.delete(deleteurl).then((response) => {
                        const result = response.data;
                        if (result.message === "success") {
                          alert("Plan Deleted Successfully !");
                          getplans();
                        } else {
                          alert("Some error occurred!");
                        }
                      });
                    }}
                    Style="background-color : white; color:red"
                  >
                    {" "}
                    <DeleteRoundedIcon></DeleteRoundedIcon>
                  </Button>{" "}
                  <Link to="/updateplan">
                    <Button
                      className="shadowify"
                      onClick={() => {
                        return sessionStorage.setItem("pid", plan.pid);
                      }}
                      Style="background-color : white; color:black"
                    >
                      {" "}
                      <SettingsIcon></SettingsIcon>
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <Button
        className="centerify shadowify"
        onClick={() => setLgShow(true)}
        Style={
          " background-color : black;height:50px; width : 200px; border-radius : 12px"
        }
      >
        Add Plan
      </Button>

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
            Add Plan
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
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="pname"
                      placeholder="Plan Name"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setPname(e.target.value);
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
                      name="pdesc"
                      placeholder="Plan Description"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setPdesc(e.target.value);
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
                      name="pduration"
                      placeholder="Duration"
                      required
                      id="duration"
                      autoComplete="off"
                      onChange={(e) => {
                        setPduration(e.target.value);
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
                      name="pcost"
                      placeholder="Cost"
                      id="cost"
                      autoComplete="off"
                      onChange={(e) => {
                        setPcost(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <PersonIcon></PersonIcon>
                  </span>
                  <div className="wthree-field">
                    <select name="Trainer" onChange={setTrainerId}>
                      {trainerList.map((trainer) => {
                        return (
                          <option value={trainer.tid}> {trainer.tfname}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <InsertPhotoIcon></InsertPhotoIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="file"
                      name="planimage"
                      placeholder="Upload Your Image"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>

                <div className="wthree-field">
                  <Button onClick={addPlan} className="btn">
                    Add
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Plans;

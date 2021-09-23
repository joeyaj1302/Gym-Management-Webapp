
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/loginCSS.css";
import WcIcon from "@material-ui/icons/Wc";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import "../css/registerform.css";
import { Modal, Button, Card } from "react-bootstrap";
import "../css/loginCSS.css";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link} from "react-router-dom";

let tid;
const Trainers = () => {
  const [trainerList, setTrainerList] = useState([]);
  const [tfname, setTfname] = useState("");
  const [tlname, setTlname] = useState("");
  const [temail, setTemail] = useState("");
  const [tpassword, setTpassword] = useState("");
  const [tage, setTage] = useState(0);
  const [taddress, setTaddress] = useState("");
  const [tmobile, setTmobile] = useState("");
  const [tgender, setTgender] = useState("");
  const [tjoindate, setTjoindate] = useState(new Date());
  const [trainerimage, setImage] = useState(null);
  const [planList, setPlanList] = useState([]);
  const [pid, setPid] = useState(0);
  const [lgShow, setLgShow] = useState(false);

  const url = "http://localhost:8080/getalltrainers";
  const gettrainers = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setTrainerList(response.data.List);
    });
  };
  const plansurl = "http://localhost:8080/getallplans";
  const getplans = () => {
    axios.get(plansurl).then((response) => {
      console.log("Inside getplans");
      console.log(response.data);
      setPlanList(response.data.List);
    });
  };

  const addTrainer = () => {
    console.log(
      tfname,
      tlname,
      tpassword,
      tage,
      tmobile,
      tgender,
      tjoindate,
      temail
    );
    console.log("inside addtrainer  " + pid);
    const addurl = "http://localhost:8080/addnewtrainer?pid=" + pid;
    const data = new FormData();
    data.append("tfname", tfname);
    data.append("tlname", tlname);
    data.append("temail", temail);
    data.append("tpassword", tpassword);
    data.append("tage", tage);
    data.append("taddress", taddress);
    data.append("tage", tage);
    data.append("tmobile", tmobile);
    data.append("tgender", tgender);
    data.append("tjoindate", tjoindate);
    console.log(data);

    axios.post(addurl, data).then((response) => {
      const result = response.data;
      console.log("In axios.post");
      console.log(result.data);
      if (result.message === "success") {
        tid = result.data.tid;
        console.log(tid);
        alert("Trainer Added Successfully !");
        goGet();
      }
    });
    const goGet = () => {
      const uploadimgurl = "http://localhost:4001/trainerimages/upload/" + tid;
      const data = new FormData();
      data.append("trainerimage", trainerimage);
      axios.post(uploadimgurl, data).then((response) => {});
      getplans();
      setLgShow(false);
      gettrainers();
    };
  };

  const findsortedtrainerssurl = "http://localhost:8080/findsortedtrainers";
  const sortByName = () => {
    axios.get(findsortedtrainerssurl).then((response) => {
      setTrainerList(response.data.List);
    });
  };
  const sorttrainersbyemailurl = "http://localhost:8080/sorttrainersbyemail";
  const sortByEmail = () => {
    axios.get(sorttrainersbyemailurl).then((response) => {
      setTrainerList(response.data.List);
    });
  };
  
  const options = [{ id: "1", name: "sayali" }];
  const [optionsdata, setoptionsdata] = useState(options);

  useEffect(() => {
    getplans();
    gettrainers();
  }, []);

  const setPlanId = (e) => {
    setPid(e.target.value);
  };

  return (
    <div className="container">
      <br />
      <h2 Style="text-shadow: 2px 2px 5px grey">Trainers List:</h2>
      <br />
      {/* <button onClick={gettrainers} className="btn btn-primary">Get trainers </button> */}
      <table>
        <tr>
          <td>
            <Button
              className="shadowify"
              onClick={sortByName}
              Style={
                " background-color : black;height:50px; width : 200px; border-radius : 12px"
              }
            >
              Sort By Name
            </Button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Button
            className="shadowify"
              onClick={sortByEmail}
              Style={
                " background-color : black;height:50px; width : 200px; border-radius : 12px"
              }
            >
              Sort By Email
            </Button>
          </td>
        </tr>
      </table>
      <br />
      <table className="table table-hover table-bordered shadowify">
        <thead className="thead-dark" Style="background-color:black">
          <tr Style={"color :white"}>
            <th>#</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainerList.map((trainer) => {
            return (
              <tr>
                <td>{trainer.tid}</td>
                <td>
                  <img
                    src={"http://localhost:4001/" + trainer.timage}
                    className="thumbnail"
                  />{" "}
                </td>
                <td>{trainer.tfname}</td>
                <td>{trainer.tlname}</td>
                <td>{trainer.temail}</td>
                <td>{trainer.tage}</td>
                <td>{trainer.taddress}</td>
                <td> Paid </td>
                <td > <Button  className="shadowify" onClick={()=>{
                             const deleteurl = "http://localhost:8080/deletebytid/?id=" + trainer.tid;
                             axios.delete(deleteurl).then((response)=>{
                                const result = response.data;
                                if(result.message === 'success') {
                                    alert("Member Deleted Successfully !");
                                    gettrainers();
                                }
                                else {
                                    alert("Some error occurred!");
                                }
                             })
                             
                        }} Style = "background-color : white; color:red" > <DeleteRoundedIcon></DeleteRoundedIcon></Button>
                       {' '}
                       <Link to="/updatetrainer">
                       <Button  className="shadowify" onClick={ ()=> { 
                           return(
                               sessionStorage.setItem("tid",trainer.tid)
                           )
                       }
                       } Style = "background-color : white; color:black" > <SettingsIcon></SettingsIcon></Button>
                       </Link>
                         </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />

      <div className="centerify">
        <Button
            className="shadowify"
          onClick={() => setLgShow(true)}
          Style={
            " background-color : blue; width : 200px; height : 50px; border-radius : 12px"
          }
        >
          Add Trainer
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
            Add Trainer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body Style="background-color:black">
          <Card className="form form-group " Style="background-color:black">
            <div className="content-bottom">
              <form action="#" method="post">
                <div className="field-group">
                  <span aria-hidden="true">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="tfname"
                      placeholder="First Name"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setTfname(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="tlname"
                      placeholder="Last Name"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setTlname(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <PersonIcon></PersonIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="number"
                      name="tage"
                      placeholder="Age"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setTage(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <WcIcon></WcIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="tgender"
                      placeholder="Gender"
                      id="gender"
                      autoComplete="off"
                      onChange={(e) => {
                        setTgender(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <PhoneAndroidIcon></PhoneAndroidIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="tmobile"
                      placeholder="Mobile Number"
                      id="mobile"
                      autoComplete="off"
                      onChange={(e) => {
                        setTmobile(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <HomeIcon></HomeIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="text"
                      name="taddress"
                      placeholder="Address"
                      autoComplete="off"
                      onChange={(e) => {
                        setTaddress(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <EmailIcon></EmailIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="email"
                      name="temail"
                      placeholder="Email Id"
                      autoComplete="off"
                      onChange={(e) => {
                        setTemail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <EmailIcon></EmailIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="password"
                      name="tpassword"
                      placeholder="Password"
                      onChange={(e) => {
                        setTpassword(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <DateRangeIcon></DateRangeIcon>
                  </span>
                  <div className="wthree-field">
                    <input
                      type="date"
                      name="tjoindate"
                      placeholder="Join Date"
                      id="date"
                      autoComplete="off"
                      onChange={(e) => {
                        setTjoindate(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <span aria-hidden="true">
                    <PersonIcon></PersonIcon>
                  </span>
                  <div className="wthree-field">
                    <select name="Plan" onChange={setPlanId}>
                      {planList.map((plan) => {
                        return (
                          <option value={plan.pid}>
                            {" "}
                            {plan.pname} {plan.pid}
                          </option>
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
                  <Button onClick={addTrainer} className="btn">
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

export default Trainers;

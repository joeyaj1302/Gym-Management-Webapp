import FeaturedInfo from "./../Components/FeaturedInfo";
import Chart from "./../Components/chart/Chart";
import { userData } from "./../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
const Dashboard = () => {
  const [mid, setMid] = useState(0);
  const [mfname, setMfname] = useState("");
  const [mlname, setMLname] = useState("");
  const [memail, setMemail] = useState("");
  const [mduedate, setMduedate] = useState(new Date());
  const [members, setMembers] = useState([]);
  const unpaidurl = "http://127.0.0.1:4001/utilityqueries/unpaid";
  const getValues = () => {
    axios.get(unpaidurl).then((response) => {
      const result = response.data;
      console.log(result);
      setMembers(result);
    });
  };
  useEffect(() => {
    getValues();
  }, []);
  return (
    <div className="container">
      <h2 Style="position: relative;left: 65px">Dashboard </h2>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Members Analytics"
        grid
        dataKey="Active User"
      />
      <br></br>
      {/* <div className="container">
        <h2>Payment Pending members List:</h2>
        <br />
        <table className="table table-striped table-hover" Style="width:550px">
          <thead Style="background-color:black ; color : white">
            <tr>
              <th>MemberId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>DueDate</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return (
                <tr>
                  <td>{member.m_id}</td>
                  <td>{member.m_fname}</td>
                  <td>{member.m_lname}</td>
                  <td>{member.m_duedate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dashboard;

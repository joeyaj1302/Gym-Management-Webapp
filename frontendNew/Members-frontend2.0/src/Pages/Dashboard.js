import React from 'react';
import FeaturedInfo from './../Components/FeaturedInfo';
import Chart from '../Components/chart/Chart';
import { userData } from './../dummyData';
import '../Pages/user.css'
const Dashboard = () => {
    return (
        <div className="container">     
            <h2 className = "centerifya" Style = "text-shadow: 2px 2px 5px grey">Dashboard </h2>
            <FeaturedInfo/>
            <Chart data={userData} title="Members Analytics" grid dataKey="Active User"/>
        </div>
    )
}

export default Dashboard;
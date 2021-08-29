import React from 'react';
import FeaturedInfo from './../Components/FeaturedInfo';
import Chart from './../Components/chart/Chart';
import { userData } from './../dummyData';

const Dashboard = () => {
    return (
        <div className="container">     
            <h2>Dashboard </h2>
            <FeaturedInfo/>
            <Chart data={userData} title="Members Analytics" grid dataKey="Active User"/>
        </div>
    )
}

export default Dashboard;
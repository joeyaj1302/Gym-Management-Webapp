import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button,  Card } from "react-bootstrap";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const FeaturedInfo = () =>{
  const[cost,setCost] = useState(0);
  const[revenue,setRevenue] = useState(0);
  const[newjoinings,setNewJoinings] = useState(0);
  const[profit,setProfit] = useState(0);
  const newjoinurl = "http://127.0.0.1:4001/utilityqueries/newjoinings";
  const revenueurl = "http://127.0.0.1:4001/utilityqueries/revenue";
  const costurl = "http://127.0.0.1:4001/utilityqueries/costs";
  const getValues = () => {
    axios.get(revenueurl).then((response) =>{
      const result = response.data;
      console.log(result);
      setRevenue(result.data[0].sum);
    })
    axios.get(costurl).then((response) =>{
      const result = response.data;
      console.log(result);
      setCost(result.data[0].cost);
    })
    axios.get(newjoinurl).then((response) =>{
      const result = response.data;
      console.log(result);
      setNewJoinings(result.data[0].count);
    })
    setProfit(cost-revenue);
    console.log(revenue,cost,newjoinings);
  }
  useEffect(() => {
    getValues();
  },[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${revenue}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${cost}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${profit}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Joinings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{newjoinings}</span>
          <span className="featuredMoneyRate">
            +5.5 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">New Users compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
import React from 'react';

import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    Pertidentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import "./user.css";


let counter =  1;
let id ;
const Yourtrainer = ({match:{params:{mid}}}) =>{
    
    return (

        <div className="user" Style="margin-left:90px">
        
<div className="userTitleContainer" >
          <h1 className="userTitle">Trainer Details</h1>
        </div>
         
          <div className="userUpdate" Style=" width : 600px">
            
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
              <span className="userShowTitle">Name </span>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{sessionStorage.getItem('tfname')} {' '} {sessionStorage.getItem('tlname')}</span>
              </div>

              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{sessionStorage.getItem('temail')}</span>
              </div>
              
              <span className="userShowTitle">Address</span>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{sessionStorage.getItem('taddress')}</span>
              </div>
               
              <span className="userShowTitle">Age</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">24</span>
              </div>
              
              </div>

              <div className="userUpdateRight" Style = "margin-left: auto">
              <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg thumbnailbig"
                    src = "https://media.istockphoto.com/photos/portrait-of-a-beautiful-woman-at-the-gym-picture-id856797530?k=20&m=856797530&s=612x612&w=0&h=kFFhoXpDoF6jCmerJe-cZzOMKRvpl2orilNip2t3McU="
                  />
               
                </div>

                
                  
              </div>
            
            </form>
          </div>
        </div>



        
    )
}

export default Yourtrainer
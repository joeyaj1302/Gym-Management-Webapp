import React from 'react'
import * as IoIcons from 'react-icons/io';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const SidebarDate = [

    {
        title : 'My Account',
        path : '/account',
        icon : <AccountCircleIcon/>,
        cName : 'nav-text'
    },
    {
        title : "Update Details",
        icon : <EditOutlinedIcon/>,
        path : "/update",
        cName : 'nav-text'
    },
    {
        title : 'Members',
        path : '/members',
        icon : <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    },
    // {
    //     title : "Salary Details",
    //     icon : <PaymentIcon/>,
    //     path : "/payment",
    //     cName : 'nav-text'
    // },
    {
        title : "Logout",
        icon : <ExitToAppIcon/>,
        path : "/logout",
        cName : 'nav-text'
    }
    
  
    
]

/*

jjj

*/
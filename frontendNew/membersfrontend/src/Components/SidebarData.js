import React from 'react'
import * as IoIcons from 'react-icons/io';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
export const SidebarDate = [
    {
        title : 'Dashboard',
        path : '/dashboard',
        icon : <DashboardIcon/>,
        cName : 'nav-text'
    },
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
        title : 'Your Trainer',
        path : '/yourtrainer',
        icon : <SupervisedUserCircleIcon/>,
        cName : 'nav-text'
    },
    {
        title : "Payment",
        icon : <PaymentIcon/>,
        path : "/payment",
        cName : 'nav-text'
    },
    {
        title : "Logout",
        icon : <ExitToAppIcon/>,
        path : "/home",
        cName : 'nav-text'
    }
    
  
    
]
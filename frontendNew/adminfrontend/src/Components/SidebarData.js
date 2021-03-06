import React from 'react'
import * as IoIcons from 'react-icons/io';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PaymentIcon from '@material-ui/icons/Payment';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

export const SidebarDate = [
    {
        title : 'Dashboard',
        path : '/dashboard',
        icon : <DashboardIcon/>,
        cName : 'nav-text'
    },
    {
        title : 'Members',
        path : '/members',
        icon : <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    },
    {
        title : 'Trainers',
        path : '/trainers',
        icon : <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    },
    {
        title : 'Plans',
        path : '/plans',
        icon : <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    },
    {
        title : 'Equipments',
        icon : <FitnessCenterIcon/>,
        path : '/equipments',
        cName : 'nav-text'
    },
    {
        title : "Payments",
        icon : <PaymentIcon/>,
        path : "/payments",
        cName : 'nav-text'
    },
    {
        title : "Enquiry",
        icon : <PaymentIcon/>,
        path : "/enquiry",
        cName : 'nav-text'
    },
    {
        title : "Logout",
        icon : <ExitToAppIcon/>,
        path : "/logout",
        cName : 'nav-text'
    }
    
  
    
]